import React, {useRef, useState, useEffect, useContext} from 'react'
import Slider from "react-slick";
import { CiUser } from "react-icons/ci";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row, Space, message } from 'antd';
import { calculateDaysWithDatesArray } from '../../utils/function';
import { BookingContext } from '../../context/BookingContext';
import dayjs from 'dayjs';
import SpaceBlock from './SpaceBlock';


const SelectSpaceCard = ({rooms, spaces}) => {
    const { startDate, endDate, selectedSpaces } = useContext(BookingContext)
    const sliderRef = useRef();
    const [selectedDays, setSelectedDays] = useState([])

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const checkSelectedSpaces = (selectedDays, selectedSpaces) => {
        selectedDays.forEach(day => {
            const spaceFound = selectedSpaces.some(space => {
                const spaceDate = new Date(space.day);
                return spaceDate.toDateString() === day.toDateString();
            });
            if (!spaceFound) {
                message.error(`Please select a space for ${day.toDateString()}`)
                throw new Error(`Please select a space for ${day.toDateString()}`);
            }
        });
        message.success("Success")
      };

    const handleProceed = () => {
        try {
            checkSelectedSpaces(selectedDays,selectedSpaces)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(startDate && endDate) {
            const days = calculateDaysWithDatesArray(startDate, endDate)
            setSelectedDays(days)
        }
    }, [startDate, endDate, selectedSpaces]);

  return (
    <>
        {
            (startDate && endDate) && 
            <section>
                <div className='max-w-[800px] mx-auto bg-white rounded-t-3xl'>
                    <div className='bg-mypurple text-white text-xl font-semibold py-[12px] px-[20px] flex gap-3 items-center rounded-t-3xl'>
                        <CiUser /> <span>Office Desk Selection</span>
                    </div>



                    <div className='p-4 md:p-10 mt-5'>
                        {
                            selectedDays.length > 1 && (
                                <div className='flex w-full justify-end mb-3'>
                                    <div className="flex gap-3">
                                        <span className="p-2 border shadow-sm rounded-md flex justify-center items-center text-2xl text-mydark cursor-pointer" onClick={goToPrev}><IoArrowBackOutline /></span>
                                        <span className="p-2 border shadow-sm rounded-md flex justify-center items-center text-2xl text-mydark cursor-pointer" onClick={goToNext}><IoArrowForward /></span>
                                    </div>
                                </div>
                            )
                        }

                        <div className='mt-3 '>

                            {
                                selectedDays.length < 2 ? (
                                    <Space className='w-full' key={1000}>
                                        <Row gutter={10}>
                                            <Col span={14} className=''>
                                                <div className='text-xl font-semibold leading-8 flex flex-col'>
                                                    <span className='text-sm text-secondary'>
                                                        Day 1
                                                    </span>
                                                    <span>
                                                        {dayjs(selectedDays[0]).format('MMM D, YYYY')}
                                                    </span>
                                                </div>

                                                <div className='mt-3'>
                                                    <div className='flex gap-6'>
                                                        <div className='flex gap-2 items-center text-lg'>
                                                            <span className='h-[20px] w-[20px] bg-[#55CA7C]'></span>
                                                            <span>Available</span>
                                                        </div>
                                                        <div className='flex gap-2 items-center text-lg'>
                                                            <span className='h-[20px] w-[20px] bg-[#333333]'></span>
                                                            <span>Selected</span>
                                                        </div>
                                                    </div>

                                                    <div className='mt-3'>
                                                        <div className="grid grid-cols-4 gap-3">
                                                            {
                                                                spaces.map((space) => (
                                                                    <SpaceBlock space={space} key={space._id} type='space' day={selectedDays[0]} />
                                                                ))
                                                            }
                                                        </div>
                                                        <div className="mt-3 gap-3 grid grid-cols-4">
                                                            {
                                                                rooms.map((space) => (
                                                                    <div className='col-span-2 w-full' key={space._id}>
                                                                        <SpaceBlock space={space} key={space._id} type='room' />
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col span ={10} className='flex justify-end w-full'>
                                                <div>
                                                    <div className='flex gap-6'>
                                                        <div className='flex gap-2 items-center text-lg'>
                                                            <span className='h-[20px] w-[20px] bg-[#FF3131]'></span>
                                                            <span>Doors</span>
                                                        </div>
                                                        <div className='flex gap-2 items-center text-lg'>
                                                            <span className='h-[20px] w-[20px] bg-[#7ED957]'></span>
                                                            <span>Windows</span>
                                                        </div>
                                                    </div>
                                                    <img src="/img/layout.png" alt="" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Space>
                                ) : 
                                (
                                    <Slider ref={sliderRef} {...sliderSettings} >
                                        {
                                            selectedDays.map((day, i) => (
                                                <Space className='w-full'key={i} >
                                                    <Row gutter={10} key={i}>
                                                        <Col span={14} className=''>
                                                            <div className='text-xl font-semibold leading-8 flex flex-col'>
                                                                <span className='text-sm text-secondary'>
                                                                    Day {i +1} / {selectedDays.length}
                                                                </span>
                                                                <span>
                                                                    {dayjs(day).format('MMM D, YYYY')}
                                                                </span>
                                                            </div>

                                                            <div className='mt-3'>
                                                                <div className='flex gap-6'>
                                                                    <div className='flex gap-2 items-center text-lg'>
                                                                        <span className='h-[20px] w-[20px] bg-[#55CA7C]'></span>
                                                                        <span>Available</span>
                                                                    </div>
                                                                    <div className='flex gap-2 items-center text-lg'>
                                                                        <span className='h-[20px] w-[20px] bg-[#333333]'></span>
                                                                        <span>Selected</span>
                                                                    </div>
                                                                </div>

                                                                <div className='mt-3'>
                                                                    <div className="grid grid-cols-4 gap-3">
                                                                        {
                                                                            spaces.map((space) => (
                                                                                <SpaceBlock space={space} key={space._id} type='space' day={day} />
                                                                            ))
                                                                        }
                                                                    </div>
                                                                    <div className="mt-3 grid grid-cols-4 gap-3">
                                                                        {
                                                                            rooms.map((space) => (
                                                                                <div className='col-span-2 w-full' key={space._id}>
                                                                                    <SpaceBlock space={space} key={space._id} type='room' day={day} />
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col span ={10} className='flex justify-end w-full'>
                                                            <div>
                                                                <div className='flex gap-6'>
                                                                    <div className='flex gap-2 items-center text-lg'>
                                                                        <span className='h-[20px] w-[20px] bg-[#FF3131]'></span>
                                                                        <span>Doors</span>
                                                                    </div>
                                                                    <div className='flex gap-2 items-center text-lg'>
                                                                        <span className='h-[20px] w-[20px] bg-[#7ED957]'></span>
                                                                        <span>Windows</span>
                                                                    </div>
                                                                </div>
                                                                <img src="/img/layout.png" alt="" />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Space>  
                                            ))
                                        }
                                    </Slider>
                                )
                            }
                        </div>

                    
                    </div>

                    

                <button className='w-full bg-secondary text-mydark py-3 font-semibold rounded-b-lg' onClick={handleProceed}>
                            Proceed
                </button>
                </div>
            </section>
        }
    </>
  )
}

export default SelectSpaceCard