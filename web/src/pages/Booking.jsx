import React from 'react'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import { Row, Col, Form, Input } from 'antd';
import { validateEmail, validatePhoneNumber } from '../utils/function';
import Test2 from '../components/test2';
import ProgressBar from '../components/ProgressBar';
import { CiUser } from "react-icons/ci";
import Slider from "react-slick";

const { TextArea } = Input

const Booking = () => {
    const [form] = Form.useForm()

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      var testSett = {
    //     prevArrow: '<span class="slick-prev shrink-enlarge days-navigate-button">Next</span>',
    //   nextArrow: '<span class="slick-next shrink-enlarge days-navigate-button">Back</span>',
    arrows: true,
    dots: true,
    //   appendArrows: "#service-nav",
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
              }
          },
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 575,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
          },
      ]
  }
  return (
    <div>
        <div className='bg-[#19498C] min-h-[375px] '>
            <Navbar />

            <div className='pt-[90px] flex items-center flex-col gap-3'>
                <h3 className='text-white text-6xl font-bold'>Orchid Springs Booking</h3>

                <div className='text-white text-xl'>
                    <span>Home</span> <span className='mx-2'>|</span> <span className='text-secondary'>Booking</span>
                </div>
            </div>
        </div>

        <div>
            <ProgressBar />
        </div>

        <div className='bg-[#FBF9F2] py-[100px]'>
            <section>
                <div className='max-w-[800px] mx-auto bg-white'>
                    <div className='bg-mypurple text-white text-2xl py-[12px] px-[20px] flex gap-3 items-center rounded-t-3xl'>
                        <CiUser /> <span>Office Desk Selection</span>
                    </div>

                    <div>
                    <span class="slick-prev shrink-enlarge days-navigate-button">Next</span>
                        <div id="service-nav"></div>
                    </div>

                    <Slider {...testSett}>
                    <div className='h-[300px] w-[300px] bg-green-500 flex justify-center items-center text-4xl'>
                        <h3>1</h3>
                    </div>
                    <div className='h-[300px] w-[300px] bg-green-500 flex justify-center items-center text-4xl'>
                        <h3>2</h3>
                    </div>
                    <div className='h-[300px] w-[300px] bg-green-500 flex justify-center items-center text-4xl'>
                        <h3>3</h3>
                    </div>
                    <div className='h-[300px] w-[300px] bg-green-500 flex justify-center items-center text-4xl'>
                        <h3>4</h3>
                    </div>
                    <div className='h-[300px] w-[300px] bg-green-500 flex justify-center items-center text-4xl'>
                        <h3>5</h3>
                    </div>
                    <div className='h-[300px] w-[300px] bg-green-500 flex justify-center items-center text-4xl'>
                        <h3>6</h3>
                    </div>
                    </Slider>
                </div>
            </section>
        </div>



        <ScrollToTop />

        <div className='mt-[100px]'>
            <Footer />
        </div>
    </div>
  )
}

export default Booking