import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { api } from '../api/api';
import { resources } from '../api/resources';
import dayjs from 'dayjs';
import { formatNumber } from '../utils/function';
import { message, Flex, Spin } from 'antd'


const ConfirmationPage = () => {
    const [reservation, setReservation] = useState(null)
    const [loading, setLoading] = useState(false)

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const status = searchParams.get('status');
  const txRef = searchParams.get('tx_ref');
//   vdB6exz
// sNKE4IC

  const fetchDetails = async () => {
    setLoading(true)
    try{
        const { data } = await api.get(resources.paymentUrl+"/"+txRef)
        setReservation(data)
    } catch {
        message.error("Network Error!")
    }
    setLoading(false)
  }

  useEffect(() => {
    if(status != 'successful') {
        message.error('Payment was not successful, please try again!')
    }
    fetchDetails()
  }, [])

  return (
    <div className="container mx-auto my-10 h-auto">
      <div className="flex justify-center">
        <div className="w-10/12">
          <div className="bg-white shadow-md rounded px-6 py-6 border">
            <div className="container">
              <div className="bg-primary">
                <img src="/img/logo2.png" alt="logo-last" className='h-[60px]' />
              </div>
              <nav className="min-h-4 mt-5" aria-label="breadcrumb">
                <ol className="flex gap-2 text-lg">
                  <li className="text-[#0D6EFD]"><Link to="/">Home</Link></li>
                  <li>{`>`}</li>
                  <li className="" aria-current="page">Reservation Details</li>
                </ol>
              </nav>
              <hr className='text-[#0D6EFD] mt-5' />

              {
                loading ? (
                    <Flex align="center" gap="middle" justify='center' className='mt-5'>
                        <Spin size="large" className='text-[#0D6EFD]' />
                        <div className='mt-3 text-gray-400 font-semibold text-[16px] text-center text-wrap'>
                            Loading, please wait!
                        </div>
                    </Flex>
                ) : (
                    <>
                        {reservation ? (
                            <>
                            <h6 className="text-lg mt-8 mb-8">Thanks for choosing Orchid Springs spaces, please find below your reservatlion details</h6>
                            <div className="flex flex-col">
                                <ul className="list-none">
                                <li className="text-muted font-bold">Name: {reservation.name}</li>
                                <li className="text-muted font-bold">Email: {reservation.email}</li>
                                <li className="text-muted mt-1 font-bold">Booking ID: {reservation.tx_ref}</li>
                                <li className="text-muted mt-1 font-bold">Date: {dayjs(reservation?.paymentDate).format('MMM D, YYYY')}</li>
                                </ul>
                                <hr className="my-4" />
                                <div className="flex justify-between">
                                <div className="w-10/12">
                                    <p>Spaces</p>
                                </div>
                                <div className="w-2/12 text-right text-wrap">
                                    <p>
                                    {reservation.reservations.length > 0 &&
                                        reservation.reservations.map((detail) => (
                                        <>
                                            {detail.space_id.type === 'room' ? (
                                            <span>Conference Room ({detail.space_id.seat_number})<br /></span>
                                            ) : (
                                            <span className="font-bold">Seat ({detail.space_id.seat_number})<br /></span>
                                            )}
                                            {detail.dates.map((date) => (
                                            <span>Date ({dayjs(date).format("MMM D, YYYY")})<br /></span>
                                            ))}
                                        </>
                                        ))}
                                    </p>
                                </div>
                                </div>
                                <hr className="my-4" />
                                <div className="flex justify-end text-black">
                                <div className="w-full">
                                    <p className="text-right font-bold">Total paid: ₦ {formatNumber(reservation.amount)}</p>
                                </div>
                                </div>
                            </div>
                            </>
                        ) : (
                            <h6 className="my-5">
                            No reservation with such Invoice number exists!!
                            </h6>
                        )}
                    </>
                )
            }
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
