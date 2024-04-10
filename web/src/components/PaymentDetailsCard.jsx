import React, { useEffect } from 'react'
import { Form, Row, Col, Input, Select, Flex } from 'antd';
import { FaInfoCircle } from "react-icons/fa";
import dayjs from 'dayjs';

const PaymentDetailsCard = ({ details }) => {

    useEffect(() => {
        console.log(details)
    }, [])
   
  return (
    <div>
        <section>
            <div className='max-w-[800px] mx-auto bg-white rounded-t-xl'>
                <div className='bg-mypurple text-white text-xl font-semibold py-[12px] px-[20px] flex gap-3 items-center rounded-t-xl'>
                    <FaInfoCircle /> <span>Payment Info</span>
                </div>

                <div className='bg-[#EBEBEE] py-2 px-[20px] text-xl font-semibold'>
                    Details
                </div>

                <section className='py-10'>
                    <Row>
                        <Col xs={24} sm={12}>
                            <h3 className='font-semibold text-lg leading-10'>Name</h3>
                        </Col>
                        <Col xs={24} sm={12}>
                            <h3 className='font-light text-lg leading-10'>{details?.name}</h3>
                        </Col>
                        <Col xs={24} sm={12}>
                            <h3 className='font-semibold text-lg leading-10'>Email</h3>
                        </Col>
                        <Col xs={24} sm={12}>
                            <h3 className='font-light text-lg leading-10'>{details?.email}</h3>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                         <Col xs={24} sm={12}>
                            <h3 className='font-semibold text-lg leading-10'>Spaces to reserve</h3>
                        </Col>
                        <Col xs={24} sm={12}>
                            {/* <h3 className='font-light text-lg leading-10'></h3> */}
                            {details?.details.map((space,i) => (
                                <div className='flex flex-col gap-1 mb-2' key={i}>
                                    <h2 className='font-semibold'>{space.seatType == 'space' ? `Seat(${space.seatNumber})` : 'Conference Room'}</h2>
                                    <div>
                                        {space.dates.map((date,i) => (
                                            <span key={i}>{dayjs(date).format('MMM D, YYYY')}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </section>

            </div>
        </section>
    </div>
  )
}

export default PaymentDetailsCard