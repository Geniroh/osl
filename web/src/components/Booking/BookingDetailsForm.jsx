import React from 'react'
import { CiUser } from "react-icons/ci";
import { Form, Row, Col, Input, Select } from 'antd';

const BookingDetailsForm = () => {
    const [form] = Form.useForm()
  return (
    <div>

        <section>
            <div className='max-w-[800px] mx-auto bg-white rounded-t-xl'>
                <div className='bg-mypurple text-white text-xl font-semibold py-[12px] px-[20px] flex gap-3 items-center rounded-t-xl'>
                    <CiUser /> <span>Please fill in correctly</span>
                </div>

                <Form
                    form={form}
                    className='p-5'
                >
                    <Row>
                        <Col xs={24} md={8}>
                            <Form.Item 
                                name="status"
                            >
                                <Input size='large' placeholder='Your Name*' className='rounded-none placeholder:text-mydark placeholder:text-[17px] placeholder:font-semibold py-3 px-4' />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

                

            <button className='w-full bg-secondary text-mydark py-3 font-semibold rounded-b-lg' >
                        Proceed
            </button>
            </div>
        </section>
    </div>
  )
}

export default BookingDetailsForm