import React, { useContext, useEffect, useState } from 'react'
import { CiUser } from "react-icons/ci";
import { Form, Row, Col, Input, Select, message } from 'antd';
import { LuUserCircle2 } from "react-icons/lu";
import { MdAlternateEmail, MdPhoneInTalk } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { validateEmail, validatePhoneNumber } from '../../utils/function';
import { api } from '../../api/api';
import { resources } from '../../api/resources';
import { BookingContext } from '../../context/BookingContext';
import { useNavigate } from 'react-router-dom';

const BookingDetailsForm = () => {
    const [form] = Form.useForm()
    const { spaceForReservation, setPaymentDetails } = useContext(BookingContext)
    const [btnLoading, setBtnLoading] = useState(false);
    const navigate = useNavigate()

    const handleProceedToPayment = async () => {
        setBtnLoading(true)
        try {
            const values = await form.validateFields()

            const payload = {
                ...values,
                reservation_id: spaceForReservation,
            }

            const { data } = await api.post(resources.reservationCostUrl, payload)
            if(data) {
                setPaymentDetails(data)
                // console.log(data)
                navigate("/payment-details")
            }

        } catch (error) {
            console.log(error)
            message.error("Please there was an error proceeding. Try again!")
        }
        setBtnLoading(false)
    }

    useEffect(() => {
        // Handle a situation where the space has been lost in state
        // console.log(spaceForReservation)
    }, [])
   
  return (
    <div>
        <section>
            <div className='max-w-[800px] mx-auto bg-white rounded-t-xl'>
                <div className='bg-mypurple text-white text-xl font-semibold py-[12px] px-[20px] flex gap-3 items-center rounded-t-xl'>
                    <CiUser /> <span>Please fill in correctly</span>
                </div>

                <Form
                    className='md:px-10 md:py-10 p-5'
                    layout='vertical'
                    form={form}
                    onFinishFailed={() => message.error("Please fill in all required fields")}
                >
                    <Row gutter={10} className=''>
                        <Col xs={24} md={5} className='flex gap-3'>
                            <LuUserCircle2 size={38} className='text-mypurple mt-1 hidden md:block' />
                            <Form.Item 
                                name="title"
                                rules={[{ required: true }]}
                                className='w-full h-full'
                            >
                                <Select
                                    className='rounded-none w-full placeholder:text-gray-400 placeholder:text-[17px] placeholder:font-semibold'
                                    size='large'
                                    placeholder="Title"
                                    // defaultValue="Mr"
                                    options={[
                                    { value: 'Mr', label: 'Mr' },
                                    { value: 'Mrs', label: 'Mrs' },
                                    { value: 'others', label: 'Others...' },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={9}>
                            <Form.Item 
                                name="firstname"
                                rules={[{ required: true, message: 'Please provide a first name' }]}
                            >
                                <Input size='large' placeholder='First Name' className='rounded-none placeholder:text-gray-400 placeholder:text-[17px] placeholder:font-light w-full' />
                            </Form.Item>
                        </Col>
                        <Col xs={6} className='md:hidden'>
                           
                        </Col>
                        <Col xs={24} md={10}>
                            <Form.Item 
                                name="lastname"
                                rules={[{ required: true, message: 'Please provide a last name' }]}
                            >
                                <Input size='large' placeholder='Last Name*' className='rounded-none placeholder:text-gray-400 placeholder:text-[17px] placeholder:font-light w-full' />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={10}>
                        <Col xs={24} md={12} className='flex gap-2'>
                            <BiMaleFemale size={38} className='text-mypurple mt-1 hidden md:block' />
                            <Form.Item 
                                name="gender"
                                className='w-full h-full'
                                rules={[{ required: true }]}
                            >
                                <Select
                                    className='rounded-none w-full placeholder:text-gray-400 placeholder:text-[17px] placeholder:font-semibold'
                                    size='large'
                                    placeholder="Gender"
                                    options={[
                                    { value: 'male', label: 'Male' },
                                    { value: 'female', label: 'Female' },
                                    { value: 'others', label: 'Others...' },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12} className='flex gap-2'>
                            <TbWorld size={38} className='text-mypurple mt-1 hidden md:block' />
                            <Form.Item 
                                name="country"
                                className='w-full h-full'
                                rules={[{ required: true }]}
                            >
                                <Select
                                    className='rounded-none w-full placeholder:text-gray-400 placeholder:text-[17px] placeholder:font-semibold'
                                    size='large'
                                    // defaultValue="Nigeria"
                                    placeholder="Country"
                                    options={[
                                    { value: 'Nigeria', label: 'Nigeria' },
                                    { value: 'USA', label: 'United States' },
                                    { value: 'UK', label: 'United Kingdom' },
                                    { value: 'Dubai', label: 'Dubai' },
                                    { value: 'Australia', label: 'Australia' },
                                    { value: 'South Africa', label: 'South Africa' },
                                    { value: 'others', label: 'Others...' },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={10}>
                        <Col xs={24} md={12} className='flex gap-2'>
                            <MdAlternateEmail size={38} className='text-mypurple mt-1 hidden md:block' />
                            <Form.Item 
                                name="email"
                                className='w-full'
                                rules={[{ required: true, message: "Please provide your email" }, {validator: validateEmail}]}
                            >
                                <Input size='large' placeholder='Email' className='rounded-none placeholder:text-gray-400 placeholder:text-[17px] placeholder:font-light w-full' />
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={12} className='flex gap-2'>
                            <MdPhoneInTalk size={38} className='text-mypurple mt-1 hidden md:block' />
                             <Form.Item 
                                name="phoneNumber"
                                className='w-full'
                                rules={[{ required: true, message: "Please provide your email" }, {validator: validatePhoneNumber}]}
                            >
                                <Input size='large' placeholder='Mobile' className='rounded-none placeholder:text-gray-400 placeholder:text-[17px] placeholder:font-light ' />
                            </Form.Item>
                        </Col>
                        
                        <Col xs={24} md={24} className='flex gap-2'>
                            <FaHouseUser size={38} className='text-mypurple mt-1 hidden md:block' />
                             <Form.Item 
                                name="address"
                                className='w-full'
                                rules={[{ required: true }]}
                            >
                                <Input size='large' placeholder='Address' className='rounded-none placeholder:text-gray-400 placeholder:text-[17px] placeholder:font-light' />
                            </Form.Item>
                        </Col>
                    </Row>

                </Form>

                

            <button className={`w-full bg-secondary text-mydark py-3 font-semibold rounded-b-lg ${btnLoading && 'cursor-not-allowed'}`} onClick={handleProceedToPayment} disabled={btnLoading}>
                {btnLoading ? 'Loading please wait...' : 'Proceed to Payment'}
            </button>
            </div>
        </section>
    </div>
  )
}

export default BookingDetailsForm