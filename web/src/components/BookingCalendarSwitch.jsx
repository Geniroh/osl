import React, { useContext, useState, memo, useEffect } from 'react'
import { FaRegCalendarDays, FaRegCircleCheck } from "react-icons/fa6";
import CalendarPicker3 from './CalendarPicker3';
import { BookingContext } from '../context/BookingContext';
import { message, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const BookingCalendarSwitch = () => {
    const [tab, setTab] = useState(1)
    const navigate = useNavigate()
    const [retrieveForm] = Form.useForm();

    const { setSpaceType, startDate, endDate } = useContext(BookingContext);

    const handleChange = (value) => {
        setSpaceType(value)
    };

    const handleCheckSpots = async () => {
        try{
            const values = await retrieveForm.validateFields()

            const { tx_ref } = values

            if(tx_ref.length > 7) {
                message.error("Please eneter a valid Booking Id")
                return
            }

            navigate(`/confirmation?tx_ref=${tx_ref}&status=successful`)
            // console.log(tx_ref)
            
        } catch {
            message.error("Please fill in all required fields")
        }
    }

    const handleSelectSpots = () => {
        if(!startDate || !endDate) {
            message.error("Please pick a start and end date to proceed!")
        } else {
            navigate("/booking")
        }
    }

    useEffect(() => {
        
    }, [])

  return (
    <>
        <div className='rounded-3xl grid grid-cols-1 md:grid-cols-2 max-w-[500px] bg-white font-semibold shadow-2xl'>
            <span className={`p-3 md:py-4 text-center w-full cursor-pointer flex items-center gap-1 rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none justify-center  ${tab == 1 ? 'bg-white' : "bg-mydark text-white"}`} onClick={() => setTab(1)}><FaRegCalendarDays /> SPACE BOOKING</span>
            <span className={`p-3 md:py-4 text-center w-full cursor-pointer flex items-center gap-1 justify-center md:rounded-tr-3xl ${tab == 2 ? 'bg-white' : "bg-mydark text-white"}`} onClick={() => setTab(2)}><FaRegCircleCheck /> RETRIEVE BOOKING</span>
        </div>
        <div className=' bg-white w-full min-h-[300px] rounded-bl-3xl rounded-br-3xl shadow-lg'>
            {
              (tab == 1) && (
                <div className='p-5 md:p-10'>
                    <div className='max-w-[170px] text-[14px]'>
                        <div className='flex justify-between font-semibold items-end'>
                            <span className='border-r-[2px] border-black pr-2 mr-2'> Spaces</span>
                            <span className='flex flex-col'>
                            <span className='text-[#DAB191] flex text-[12px] font-semibold'>Just from ₦3000</span>
                                <span>Book Here</span>
                            </span>
                        </div>
                    </div>

                    <div className='w-full bg-[#F8F3E7] min-h-[100px] rounded-lg mt-5 px-4 py-4 grid grid-cols-1 md:grid-cols-2'>
                        <div className='flex justify-center md:justify-end items-center  mt-5 md:mt-0'>
                            <div className='flex flex-col md:pr-4'>
                                <label htmlFor="space_type" className='text-[#DAB191] text-[12px] pl-1'>Spaces</label>
                                <select name="" id="space_type" defaultValue="single_spot" onChange={handleChange} className='bg-transparent border-0 md:min-w-[160px] outline-none text-[14px] md:text-[16px] cursor-pointer'>
                                    <option value="conference_room" className='py-2 m-3'>Conference Room</option>
                                    <option value="single_spot">Single Spot</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex items-center md:pl-5 mt-5 md:mt-0 '>
                            <CalendarPicker3 />
                        </div>
                    </div>

                    <div className='flex justify-center mt-5 md:justify-end w-full'>
                        <button className={`px-4 py-3 md:px-6 md:py-4 text-[16px] font-semibold bg-secondary text-mydark hover:bg-mydark hover:text-white rounded-lg`} onClick={handleSelectSpots}>Select Spots</button>
                    </div>
                </div>
              )
            }

            {
                (tab == 2) && (
                    <Form
                        form={retrieveForm}
                        layout='vertical'
                    >
                        <div className='p-5 md:p-10'>
                            <div className='w-full bg-[#F8F3E7] min-h-[100px] rounded-lg mt-5 px-4 py-4 flex flex-col gap-2 text-[14px]'>
                                <Form.Item
                                    label={<span  className='font-semibold mb-1'>Enter Invoice</span>}
                                    name="tx_ref"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your booking reference code',
                                    },
                                    ]}
                                >
                                    <Input className='py-2 px-4 rounded-none outline-none' />
                                </Form.Item>
                            </div>

                            <div className='flex justify-center mt-5 md:justify-end w-full'>
                                <button className={`px-4 py-3 md:px-6 md:py-4 text-[16px] font-semibold bg-secondary text-mydark hover:bg-mydark hover:text-white rounded-lg`} onClick={handleCheckSpots} >Check Your Spot</button>
                            </div>
                        </div>
                    </Form>
                )
            }

        </div>
    </>
  )
}

export default BookingCalendarSwitch