import { Space, Skeleton, message, Spin } from 'antd';
import { UserOutlined, CalendarOutlined, BarChartOutlined, LoadingOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/auth';
import { api } from '../api/api';
import { resources } from '../api/resources';

const Overview = () => {
    const [people, setPeople] = useState(0)
    const [reservation, setReservation] = useState(0)
    const [payment, setPayment] = useState(0);
    const [loading, setLoading] = useState(false);

    const { user } = useAuth();

    function calculateTotalAmount(data) {
        let totalAmount = 0;
          data.forEach((pay) => {
            if (pay.amount) {
              totalAmount += pay.amount;
            }
          });
        
        return totalAmount;
    }

    const fetchData = async() => {
        setLoading(true)
        try { 
            const { data: paymentData } = await api.get(resources.allPaymentUrl);
            const { data: reservationData} = await api.get(resources.reservationUrl);
            // const deskspaces = await axios.get('http://localhost:8080/api/space?type=space');
            // const roomspaces = await axios.get('http://localhost:8080/api/space?type=room');
            // const officeSpaces = await axios.get('http://localhost:8080/api/space');
            // const promos = await axios.get('http://localhost:8080/api/promo');
            const { data: peopleData } = await api.get(resources.peopleUrl);
    
    
            const total = calculateTotalAmount(paymentData);
            setPeople(peopleData.length);
            setReservation(reservationData.length)
            setPayment(total)
        } catch (error) {
            message.error("Network Error!");
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    },[people])

    return (
        <Space
            direction="horizontal"
            size="large"
            className='flex w-full p-5'
        >
            <div className='w-[200px] h-[100px] rounded-3xl bg-white flex items-center hover:scale-105 hover:shadow-lg duration-500 cursor-pointer p-3'>
                <div className='flex w-[80px] h-full justify-center items-center'>
                    <UserOutlined className='text-4xl' />
                </div>
                <div className='flex flex-col justify-evenly w-[120px] gap-5 text-center'>
                    <h3 className='font-bold text-lg'>Customers</h3>
                    {
                        loading ? 
                        (
                            <Spin
                                indicator={
                                <LoadingOutlined
                                    style={{
                                    fontSize: 24,
                                    }}
                                    spin
                                />
                                }
                            />
                        ) : 
                        (
                            <p className='text-base'>{people && people}</p>
                        )
                    }
                </div>
            </div>

            <div className='w-[200px] h-[100px] rounded-3xl bg-white flex items-center hover:scale-105 hover:shadow-lg duration-500 cursor-pointer p-3'>
                <div className='flex w-[80px] h-full justify-center items-center'>
                    <CalendarOutlined className='text-4xl'/>
                </div>
                <div className='flex flex-col justify-evenly w-[120px] gap-5 text-center'>
                    <h3 className='font-bold text-lg'>Reservations</h3>
                    {
                        loading ? 
                        (
                            <Spin
                                indicator={
                                <LoadingOutlined
                                    style={{
                                    fontSize: 24,
                                    }}
                                    spin
                                />
                                }
                            />
                        ) : 
                        (
                            <p className='text-base'>{reservation && reservation }</p>
                        )
                    }
                </div>
            </div>

            {
                user?.role === 'super_admin' ?
                (
                    <div className='w-[200px] h-[100px] rounded-3xl bg-white flex items-center hover:scale-105 hover:shadow-lg duration-500 cursor-pointer p-3'>
                        <div className='flex w-[80px] h-full justify-center items-center'>
                            <BarChartOutlined className='text-4xl'/>
                        </div>
                        <div className='flex flex-col justify-evenly w-[120px] gap-5 text-center'>
                            <h3 className='font-bold text-lg'>Payments</h3>
                            {
                                loading ? 
                                (
                                    <Spin
                                        indicator={
                                        <LoadingOutlined
                                            style={{
                                            fontSize: 24,
                                            }}
                                            spin
                                        />
                                        }
                                    />
                                ) : 
                                (
                                    <p className='text-base'>₦ {payment && payment }</p>
                                )
                            }
                        </div>
                    </div>
                ) : ''
            }
        </Space>
    )
};
export default Overview;