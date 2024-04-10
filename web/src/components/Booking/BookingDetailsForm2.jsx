import React from 'react'
import { CiUser } from "react-icons/ci";
import { Form, Row, Col, Input, Select, Flex } from 'antd';
import { LuUserCircle2 } from "react-icons/lu";
import { MdAlternateEmail, MdPhoneInTalk } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { validateEmail, validatePhoneNumber } from '../../utils/function';
import { FaInfoCircle } from "react-icons/fa";

const BookingDetailsForm2 = () => {
   
  return (
    <div>
        <section>
            <div className='max-w-[800px] mx-auto bg-white rounded-t-xl'>
                <div className='bg-mypurple text-white text-xl font-semibold py-[12px] px-[20px] flex gap-3 items-center rounded-t-xl'>
                    <FaInfoCircle /> <span>Payment Info</span>
                </div>

                <div className='bg-[#EBEBEE] py-2 px-5 text-xl font-semibold'>
                    Details
                </div>

                <section className='py-10'>

                    <Row>
                        <Col xs={24} sm={12}>
                            <h3 className='font-semibold text-lg leading-10 uppercase'>Name</h3>
                        </Col>
                        <Col xs={24} sm={12}>
                            <h3 className='font-light text-lg leading-10'>Chibuzor Irobuisi</h3>
                        </Col>
                        <Col xs={24} sm={12}>
                            <h3 className='font-semibold text-lg leading-10 uppercase'>Email</h3>
                        </Col>
                        <Col xs={24} sm={12}>
                            <h3 className='font-light text-lg leading-10'>irochibuzor@gmail.com</h3>
                        </Col>
                    </Row>
                    <hr />
                </section>


            </div>
        </section>
    </div>
  )
}

export default BookingDetailsForm2