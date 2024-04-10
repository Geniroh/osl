import React, { useEffect, useContext } from 'react'
import Navbar from '../components/Navbar';
import ProgressBar from '../components/ProgressBar';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import BookingDetailsForm from '../components/Booking/BookingDetailsForm';
import { BookingContext } from '../context/BookingContext';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd'

const BookingDetails = () => {
    const { spaceForReservation } = useContext(BookingContext);
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "OSL Spaces | Booking Details"
        window.scrollTo(0, 0);

        if(spaceForReservation.length < 1) {
            navigate("/booking", {replace: true});
            message.error("Please try booking again")
        }
    }, [])
  return (
    <div>
        <div className='bg-[#19498C] min-h-[375px] '>
            <Navbar />

            <div className='pt-[90px] flex items-center flex-col gap-3'>
                <h3 className='text-white text-6xl font-bold'>Booking Details</h3>

                <div className='text-white text-xl'>
                    <span>Home</span> <span className='mx-2'>|</span> <span className='text-secondary'>Booking Details</span>
                </div>
            </div>
        </div>

        <div>
            <ProgressBar firstNum={2} firstText="Guest Information" secondNum={3} secondText="Payment" title="Customer Details: Please fill in with valid information." />
        </div>

        <div className='bg-[#FBF9F2] py-[100px]'>
          <BookingDetailsForm />
          {/* <BookingDetailsForm2 /> */}
        </div>



        <ScrollToTop />

        <div className=''>
            <Footer />
        </div>
    </div>
  )
}

export default BookingDetails