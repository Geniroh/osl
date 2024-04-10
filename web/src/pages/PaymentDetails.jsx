import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar';
import ProgressBar from '../components/ProgressBar';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import PaymentDetailsCard from '../components/PaymentDetailsCard';
import { BookingContext } from '../context/BookingContext';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const PaymentDetails = () => {
    const { paymentDetails } = useContext(BookingContext);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "OSL Spaces | Payment Details"
        window.scrollTo(0, 0);

        if(!paymentDetails) {
           navigate("/booking", {replace: true});
            message.error("Please try booking again")
        }
    }, [])
  return (
    <div>
        <div className='bg-[#19498C] min-h-[375px] '>
            <Navbar />

            <div className='pt-[90px] flex items-center flex-col gap-3'>
                <h3 className='text-white text-6xl font-bold'>Paymnet Details</h3>

                <div className='text-white text-xl'>
                    <span>Home</span> <span className='mx-2'>|</span> <span className='text-secondary'>Payment Details</span>
                </div>
            </div>
        </div>

        <div>
            <ProgressBar firstNum={3} firstText="Payment" secondNum={4} secondText="Confirmation" title="Payment" />
        </div>

        <div className='bg-[#FBF9F2] py-[100px]'>
            <PaymentDetailsCard details={paymentDetails} />
        </div>



        <ScrollToTop />

        <div className=''>
            <Footer />
        </div>
    </div>
  )
}

export default PaymentDetails