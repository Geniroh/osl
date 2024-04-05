import React, { useRef, useState, useEffect } from 'react';
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import { CgCheck } from "react-icons/cg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceSliderCards = () => {
    const sliderRef = useRef(null);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [autoScrollInterval, setAutoScrollInterval] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSlidesToShow(3); 
            } else if (window.innerWidth >= 768) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(1);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
            clearInterval(autoScrollInterval);
        };
    }, []);

    useEffect(() => {
        if (!autoScrollInterval) {
            setAutoScrollInterval(setInterval(() => {
                sliderRef.current.slickNext();
            }, 6000));
        }

        return () => {
            clearInterval(autoScrollInterval);
        };
    }, [autoScrollInterval]);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: slidesToShow,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const goToPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const goToNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const handleCardHover = () => {
        clearInterval(autoScrollInterval);
        setAutoScrollInterval(null);
    };

    return (
        <div className='transition-all duration-300 ease-in-out'>
            <section>

                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-[#FDBB03] text-[14px] tracking-wider uppercase">WHY OSL SPACES</span>
                        <span className="text-mydark font-bold text-3xl">Our Great Space Options</span>
                    </div>

                    <div className="flex gap-3">
                        <span className="p-2 border shadow-sm rounded-md flex justify-center items-center text-2xl text-mydark cursor-pointer" onClick={goToPrev}><IoArrowBackOutline /></span>
                        <span className="p-2 border shadow-sm rounded-md flex justify-center items-center text-2xl text-mydark cursor-pointer" onClick={goToNext}><IoArrowForward /></span>
                    </div>
                </div>
            </section>

            <section className="mt-5 mb-10">
                    <Slider ref={sliderRef} {...sliderSettings}>
                        <div className="rounded-md bg-white shadow-lg px-6 py-5 md:px-8 md:py-8 max-w-[350px]"  onMouseEnter={handleCardHover}>
                            <h3 className='text-[#571336] text-2xl font-semibold mb-3 '>Loyalty Tickets</h3>
                            <ul className='list-none'>
                                <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                                <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                                <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                            </ul>
                        </div>

                        <div className="rounded-md bg-white shadow-md px-6 py-5 md:px-8 md:py-8 max-w-[350px] "  onMouseEnter={handleCardHover}>
                            <h3 className='text-[#571336] text-2xl font-semibold mb-3 '>Pre-Book Your Space</h3>
                            <ul className='list-none'>
                                <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy workspace add-ons</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                                <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Opt out at will</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                                <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Minimal addon charges</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                            </ul>
                        </div>

                        <div className="rounded-md bg-white shadow-md px-6 py-5 md:px-8 md:py-8 max-w-[350px]"  onMouseEnter={handleCardHover}>
                            <h3 className='text-[#571336] text-2xl font-semibold mb-3 '>Reserve preferred seat!</h3>
                            <ul className='list-none'>
                                <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>What will it be, window or aisle</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                                <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Select your preferred seat prior</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                                <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Reserved for you</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                            </ul>
                        </div>

                        <div className="rounded-md bg-white shadow-md px-6 py-5 md:px-8 md:py-8 max-w-[350px] mx-2">
                            <h3 className='text-[#571336] text-2xl font-semibold mb-3 '>Enjoy stress-free Work</h3>
                            <ul className='list-none'>
                                <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Work stress-free</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                                <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Modifications covered</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                                <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Booking retrievals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                            </ul>
                        </div>

                    </Slider>
            </section>
        </div>
    );
};

export default ServiceSliderCards;