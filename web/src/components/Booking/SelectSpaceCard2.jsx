import React, {useRef, useState, useEffect} from 'react'
import Slider from "react-slick";
import { CiUser } from "react-icons/ci";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Col, Row, Space } from 'antd';


const SelectSpaceCard2 = ({rooms, space}) => {
    const sliderRef = useRef();

    const testArr = []

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const sliderSettings = {
        // dots: false,
        // infinite: true,
        // speed: 500,
        // arrows: false,
        // slidesToShow: 1,
        dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    };

    // useEffect(() => {
       
    // }, []);

  return (
    <section>
        <div className='max-w-[800px] mx-auto bg-white'>
            <div className='bg-mypurple text-white text-xl font-semibold py-[12px] px-[20px] flex gap-3 items-center rounded-t-3xl'>
                <CiUser /> <span>Office Desk Selection</span>
            </div>

            <div className='p-4 md:p-10 mt-5'>
                <div className='flex w-full justify-end mb-3'>
                    <div className="flex gap-3">
                        <span className="p-2 border shadow-sm rounded-md flex justify-center items-center text-2xl text-mydark cursor-pointer" onClick={goToPrev}><IoArrowBackOutline /></span>
                        <span className="p-2 border shadow-sm rounded-md flex justify-center items-center text-2xl text-mydark cursor-pointer" onClick={goToNext}><IoArrowForward /></span>
                    </div>
                </div>

                <div className='mt-3 '>
                    <Slider ref={sliderRef} {...sliderSettings} >
                        {
                            testArr.map((item, i) => (
                                <Space className='w-full' key={i}>
                                    <Row gutter={10}>
                                        <Col span={14} className=''>
                                            <div className='text-xl font-semibold leading-8'>
                                                Day 2, April 5th 2023
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
                                                        <span className='p-[15px] bg-[#55CA7C] flex justify-center items-center text-white cursor-default'>1</span>
                                                        <span className='p-[15px] bg-[#55CA7C] flex justify-center items-center text-white'>1</span>
                                                        <span className='p-[15px] bg-[#55CA7C] flex justify-center items-center text-white'>1</span>
                                                        <span className='p-[15px] bg-[#55CA7C] flex justify-center items-center text-white'>1</span>
                                                        <span className='p-[15px] bg-[#55CA7C] flex justify-center items-center text-white'>1</span>
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
                </div>

               
            </div>

            

        </div>
    </section>
  )
}

export default SelectSpaceCard2