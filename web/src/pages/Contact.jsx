import React from 'react'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import { Row, Col, Form, Input } from 'antd';
import { validateEmail, validatePhoneNumber } from '../utils/function';

const { TextArea } = Input

const Contact = () => {
    const [form] = Form.useForm()
  return (
    <div>
        <div className='bg-[#19498C] min-h-[375px] '>
            <Navbar />

            <div className='pt-[90px] flex items-center flex-col gap-3'>
                <h3 className='text-white text-6xl font-bold'>Contact Us</h3>

                <div className='text-white text-xl'>
                    <span>Home</span> <span className='mx-2'>|</span> <span className='text-secondary'>Contact Us</span>
                </div>
            </div>
        </div>

        <section className='mt-[100px]'>
            <div className='max-w-[850px] mx-auto '>
                <div className="flex justify-center w-full items-center mb-5">
                    <div className="flex flex-col text-center">
                        <span className="text-[#FDBB03] text-[14px] tracking-wider uppercase">Contact us Now</span>
                        <span className="text-mydark font-bold text-4xl">Write a Message</span>
                    </div>
                </div>
                <Row>
                    <Col span={24}>
                        <Form
                            layout="vertical"
                            form={form}
                            className='p-10'
                        >

                            <Row gutter={10}>
                                <Col xs={24} md={12}>
                                    <Form.Item 
                                        name="name"
                                        rules={[{ required: true, message: 'Please enter your full name' }]}
                                    >
                                        <Input size='large' placeholder='Your Name*' className='rounded-none placeholder:text-mydark placeholder:text-[17px] placeholder:font-semibold py-3 px-4' />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item 
                                        name="email"
                                        rules={[
                                            { required: true, message: 'Please enter email address' },
                                            { validator: validateEmail }
                                        ]}
                                        
                                    >
                                        <Input size='large' type='email' placeholder='Your Email*' className='rounded-none placeholder:text-mydark placeholder:text-[17px] placeholder:font-semibold py-3 px-4'  />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item 
                                        name="subject"
                                        rules={[
                                            { required: true, message: 'Please enter message subject' },
                                        ]}
                                        
                                    >
                                        <Input size='large' type='email' placeholder='Your Subject*' className='rounded-none placeholder:text-mydark placeholder:text-[17px] placeholder:font-semibold py-3 px-4'  />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12} >
                                    <Form.Item 
                                        name="phone"
                                        rules={[
                                            { required: true, message: 'Please enter phone number' },
                                            {validator: validatePhoneNumber }
                                        ]}
                                    >
                                        <Input size='large' placeholder='Your Mobile*' className='rounded-none placeholder:text-mydark placeholder:text-[17px] placeholder:font-semibold py-3 px-4'  />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={24} >
                                    <Form.Item
                                        name="message"
                                        rules={[
                                            { required: true, message: 'Please enter your message here' },
                                        ]}
                                    >
                                        <TextArea rows={5} className='rounded-none placeholder:text-mydark placeholder:text-[17px] placeholder:font-semibold py-3 px-4'  placeholder='Your Message*'></TextArea>
                                    </Form.Item>
                                </Col>

                                <div className='flex justify-center mt-5 w-full'>
                                    <button type='button' className='px-10 rounded-lg py-3 bg-secondary text-mydark hover:text-white hover:bg-mydark text-lg font-semibold'>SUBMIT</button>
                                </div>
                            </Row>

                        
                        </Form>
                    </Col>
                </Row>
            </div>
        </section>



        <ScrollToTop />

        <div className='mt-[100px]'>
            <Footer />
        </div>
    </div>
  )
}

export default Contact