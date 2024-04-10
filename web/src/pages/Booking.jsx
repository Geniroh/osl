import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import { Row, Col, Form, Input, Modal, message, Flex, Spin } from 'antd';
import { validateEmail, validatePhoneNumber } from '../utils/function';
// import Test2 from '../components/test2';
import ProgressBar from '../components/ProgressBar';
// import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
// import { CiUser } from "react-icons/ci";
// import Slider from "react-slick";
import { api } from '../api/api';
import { resources } from '../api/resources';
import SelectSpaceCard from '../components/Booking/SelectSpaceCard';
import { BookingContext } from '../context/BookingContext';
import CalendarPicker3 from '../components/CalendarPicker3';
import dayjs from 'dayjs';
import { useLocation } from 'react-router-dom'

const Booking = () => {
    const [form] = Form.useForm()
    const [conferenceRooms, setConferenceRooms] = useState([]);
    const [deskSpace, setDeskSpace] = useState([]);
    const [selectDatesModal, setSelectDatesModal] = useState(false);
    const [loading, setLoading] = useState(false)
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const pcode = searchParams.get('pcode');

    const {spaceType, startDate, endDate, setSpaceType} = useContext(BookingContext)

    const checkIfDates = () => {
        if(!startDate || !endDate) {
            setSelectDatesModal(true)
            return
        } 

        message.success(`You are booking for ${dayjs(startDate).format('MMM D, YYYY') + " to " + dayjs(endDate).format('MMM D, YYYY')}`, 4)
    }

    const handleOk = () => {
        if(!startDate || !endDate) {
            message.error('Please select a start and end date!')
            return
        }

        // message.success(`You are booking for ${dayjs(startDate).format('MMM D, YYYY') + " to " + dayjs(endDate).format('MMM D, YYYY')}`)
        setSelectDatesModal(false)
    }

    const handleTypeChange = (value) => {
        setSpaceType(value)
    };

    const fetchData = async () => {
        setLoading(true)
        try {
            const { data: deskSpace } = await api.get(resources.getSpace, {
                params: {
                    type: 'space'
                }
            })
    
            const { data: roomSpace } = await api.get(resources.getSpace, {
                params: {
                    type: 'room'
                }
            })
    
            setDeskSpace(deskSpace)
            setConferenceRooms(roomSpace)
        } catch (error) {
            message.error('Network Error!')
            setLoading(true)
            console.log(error)
        }
        setLoading(false)
    }

  useEffect(() => {
    document.title = "OSL Spaces | Booking"

    window.scrollTo(0, 0);
    fetchData()
    checkIfDates()
  },[startDate, endDate])
  return (
    <div>
        <div className='bg-[#19498C] min-h-[375px] '>
            <Navbar />

            <div className='pt-[90px] flex items-center flex-col gap-3 px-3'>
                <h3 className='text-white text-4xl md:text-6xl font-bold'>Orchid Springs Booking</h3>

                <div className='text-white text-lg md:text-xl'>
                    <span>Home</span> <span className='mx-2'>|</span> <span className='text-secondary'>Booking</span>
                </div>
            </div>
        </div>

        <div>
            <ProgressBar firstNum={1} firstText={'Space Selection'} secondNum={2} secondText="Guest Information" title="Please select a space" />
        </div>

        <div className='bg-[#FBF9F2] py-[100px]'>
            {
                loading ? (
                    <Flex align="center" gap="middle" justify='center'>
                        <Spin size="large" className='text-secondary' />
                        <div className='mt-3 text-gray-400 font-semibold text-[16px] text-center text-wrap'>
                            Loading Spaces, please wait!
                        </div>
                    </Flex>
                ) : (
                    <SelectSpaceCard rooms={conferenceRooms} spaces={deskSpace} pcode={pcode} key={1} />
                )
            }
            {/* <SelectSpaceCard2 /> */}
        </div>



        <ScrollToTop />

        <div className='mt-[100px]'>
            <Footer />
        </div>

        <Modal title={<img src="/img/logo2.png" alt="" className='h-[30px] object-contain' />} open={selectDatesModal} onCancel={() => message.info("Please select a start and end date first")}
    
        footer={<button onClick={handleOk} className='bg-secondary hover:bg-mydark px-3 py-2 text-[16px] text-white rounded-md mt-3'>Proceed</button>}
        >
            <div className='text-gray-500 font-semibold text-md leading-5 mt-3 px-2'>
                Please you need to select your booking period before you can proceed
            </div>
            <div className='w-full bg-[#F8F3E7] min-h-[100px] rounded-lg mt-5 px-4 py-4 grid grid-cols-1 md:grid-cols-2'>
                <div className='flex justify-start md:justify-end items-center  mt-5 md:mt-0'>
                    <div className='flex flex-col md:pr-4'>
                        <label htmlFor="space_type" className='text-[#DAB191] text-[12px] pl-1'>Spaces</label>
                        <select name="" id="space_type" defaultValue="single_spot" onChange={handleTypeChange} className='bg-transparent border-0 md:min-w-[160px] outline-none text-[14px] md:text-[16px] cursor-pointer'>
                            <option value="conference_room" className='py-2 m-3'>Conference Room</option>
                            <option value="single_spot">Single Spot</option>
                        </select>
                    </div>
                </div>
                <div className='flex items-center md:pl-5 mt-5 md:mt-0 '>
                    <CalendarPicker3 />
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default Booking