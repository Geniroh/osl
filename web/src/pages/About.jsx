import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Col, Row } from 'antd'
import { FaCircleCheck } from "react-icons/fa6";
import Banner from '../components/Banner';
import ScrollToTop from '../components/ScrollToTop';
import MyAccordion from '../components/MyAccordion';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
  return (
    <div>

        <div className='bg-[#19498C] min-h-[375px] '>
            <Navbar />

            <div className='pt-[90px] flex items-center flex-col gap-3'>
                <h3 className='text-white text-6xl font-bold'>About Us</h3>

                <div className='text-white text-xl'>
                    <Link to="/"><span>Home</span></Link><span className='mx-2'> |</span> <span className='text-secondary'>About</span>
                </div>
            </div>
        </div>

        <section className='mt-[150px]'>

            <Row gutter={16}>
                <Col xs={24} md={12} className='md:pl-10'>
                    <div className="flex justify-between w-full items-center mb-5">
                        <div className="flex flex-col">
                            <span className="text-[#FDBB03] text-[14px] tracking-wider uppercase">WHO WE ARE</span>
                            <span className="text-mydark font-bold text-4xl">OSL Spaces</span>
                        </div>
                    </div>

                    <div className='text-gray-500 leading-7 text-[18px]'>
                        OSL spaces is a subsidiary of Orchid Spring Limited. At OSL spaces, we ensure that we provide professionals with the most outstanding working space, featuring state of the art facilities.
                    </div>

                    <ul className='list-none flex flex-col gap-4 mt-5 '> 
                        <li className='flex gap-5 items-center text-[#621336] text-[17px] font-semibold'><FaCircleCheck /> <span>Pre-Book Your Work Space Today</span></li>

                        <li className='flex gap-5 items-center text-[#621336] text-[17px] font-semibold'><FaCircleCheck /> <span>Get The Most For Your Pay</span></li>

                        <li className='flex gap-5 items-center text-[#621336] text-[17px] font-semibold'><FaCircleCheck /> <span>Relax And Optimize Your Work Efficiency</span></li>
                    </ul>

                    <div className='mt-5'>
                        <Link to="/contact" className='px-5 py-2 rounded-md text-mydark bg-secondary hover:bg-mydark hover:text-white font-semibold text-lg'>Contact Us</Link>
                    </div>
                </Col>

                <Col xs={24} md={12} className=' '>
                    <div className='bg-bottom bg-cover bg-no-repeat h-full min-h-[250px] md:min-h-[400px] relative flex items-center max-w-[290px] md:max-w-[400px]' style={{ backgroundImage: "url('/img/about_img01.jpg')"}}>
                        <div className='border-[10px] border-secondary h-full w-full translate-x-[10%] translate-y-[-10%]'>
                            <div className=' h-full bg-center bg-no-repeat bg-cover translate-x-[10%] translate-y-[-10%] ' style={{ backgroundImage: "url('/img/about_img02.jpg')"}}>

                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>

        <div className='mt-[100px]'>
            <Banner />
        </div>

        <section className='mt-[100px]'>

            <Row gutter={16}>
                <Col xs={24} md={12} className=''>
                    <div className="flex justify-between w-full items-center mb-5">
                        <div className="flex flex-col">
                            <span className="text-[#FDBB03] text-[14px] tracking-wider uppercase">Asked Questions</span>
                            <span className="text-mydark font-bold text-4xl">Frequently Asked Questions</span>
                            <p className='mt-3 text-mydark text-[18px]'>Take a look at out frequently asked questions</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-6'>
                        <MyAccordion key={1} title={'How to Find Direction'} text={`No need to worry. At all of office's street enterances, there are direction pointers so that you don not get lost.`} />

                        <MyAccordion key={2} title={'Contact in Case of Emergency'} text={`We have a quick response strategy in case of emergencies..`} />

                        <MyAccordion key={3} title={'Safety & Security'} text={`Our woek spaces are setup with your safety in mind. All security measures have been put in place to ensure your safety.`} />
                    </div>
                </Col>

                <Col xs={24} md={12} className=' '>
                    <div className='h-full w-full border-r-[15px] border-b-[15px] border-secondary cursor-pointer transition-all duration-500 hover:border-0'>
                        <img src="/img/faq_img.jpg" className='object-cover max-h-[450px]' alt="" />
                    </div>
                </Col>
            </Row>
        </section>

        <ScrollToTop />

        <div className='mt-[100px]'>
            <Footer />
        </div>
    </div>
  )
}

export default About