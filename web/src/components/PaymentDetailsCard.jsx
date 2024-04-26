import React, { useEffect, useState, useContext } from 'react'
import { Form, Row, Col, message } from 'antd';
import { FaInfoCircle } from "react-icons/fa";
import dayjs from 'dayjs';
import { formatNumber } from '../utils/function';
import { api } from '../api/api';
import { resources } from '../api/resources';
import { useNavigate } from 'react-router-dom';
import { BookingContext } from '../context/BookingContext';

const PaymentDetailsCard = ({ details }) => {
    const navigate = useNavigate()
    const [btnLoading,setBtnLoading] = useState(false)
    const [isDiscount, setIsDiscount] = useState(false)
    const [originalPrice,setOriginalPrice] = useState(0)
    const [promo,setPromo] = useState(null)

    const {promoDetails} = useContext(BookingContext)

    const handlePayNow = async () => {
        setBtnLoading(true)
        try {
            details.amount = details.total
            const { data } = await api.post(resources.paymentUrl, details);
    
            if(data) {
                window.location.href = data.link;
            }
        } catch (error) {
            message.error("Could not process payment at the moment, Please try again!");
        }
        setBtnLoading(false)
    }

    function calculateOriginalPrice(total, discountPercentage) {
        return total / ((100 - discountPercentage) / 100);
    }

    const checkPromoApplied = async () => {
        if(promoDetails.pcode){
            const { data } = await api.get(resources.promoUrl +`/${promoDetails.pcode}`);

            if(data) {
                let total = calculateOriginalPrice(details.total, data.discountPercentage)
                setIsDiscount(true)
                setPromo(data)
                setOriginalPrice(total)
            }
        }
    }

    useEffect(() => {

        checkPromoApplied()
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
                        <Col xs={24} sm={12} className='flex sm:justify-end'>
                            <h3 className='text-[15px] text-[#282b36] leading-10'>{details?.name}</h3>
                        </Col>
                        <Col xs={24} sm={12} >
                            <h3 className='font-semibold text-lg leading-10'>Email</h3>
                        </Col>
                        <Col xs={24} sm={12} className='flex sm:justify-end'>
                            <h3 className='text-[15px] text-[#282b36] leading-10'>{details?.email}</h3>
                        </Col>
                    </Row>
                    <hr className='my-2' />
                    <Row>
                         <Col xs={24} sm={12}>
                            <h3 className='font-semibold text-lg leading-10'>Spaces to reserve</h3>
                        </Col>
                        <Col xs={24} sm={12} className='flex flex-col sm:items-end text-[15px] text-[#282b36]'>
                            {/* <h3 className='font-light text-lg leading-10'></h3> */}
                            {details?.details.map((space,i) => (
                                <div className='flex flex-col sm:items-end gap-1 mb-2' key={i}>
                                    <h2 className='font-semibold'>{space.seatType == 'space' ? `Seat(${space.seatNumber})` : 'Conference Room'} on  {space.dates.map((date,i) => (
                                            <span key={i} className='mr-2'>{dayjs(date).format('MMM D, YYYY')},</span>
                                        ))}
                                    </h2>
                                    {/* <div>
                                        {space.dates.map((date,i) => (
                                            <span key={i}>{dayjs(date).format('MMM D, YYYY')}</span>
                                        ))}
                                    </div> */}
                                </div>
                            ))}
                        </Col>
                    </Row>
                    <hr className='my-2' />
                    <Row>
                        <Col xs={24} sm={12}>
                            <h3 className='font-semibold text-lg leading-10'>Price</h3>
                        </Col>
                        <Col xs={24} sm={12} className='flex sm:justify-end'>
                            {
                                isDiscount ? 
                                (
                                    <div className='flex flex-col'>
                                        <h3 className='text-right'>{promo?.discountPercentage}% promo applied</h3>
                                        <h3 className='text-lg leading-10 font-bold'> <span className='line-through text-sm'>₦ {formatNumber(originalPrice)}</span> ₦ {formatNumber(details?.total)}</h3>
                                    </div>
                                ): (
                                    <h3 className='text-lg leading-10 font-bold'>₦ {formatNumber(details?.total)}</h3>
                                )
                            }
                        </Col>
                    </Row>
                </section>
              
                <button className={`w-full bg-secondary text-mydark py-3 font-semibold rounded-b-lg ${btnLoading && 'cursor-not-allowed'}`} onClick={handlePayNow} disabled={btnLoading}>
                    {btnLoading ? 'Loading please wait...' : 'Pay Now'}
                </button>

            </div>
        </section>
    </div>
  )
}

export default PaymentDetailsCard