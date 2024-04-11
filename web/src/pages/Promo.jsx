import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar';
import ProgressBar from '../components/ProgressBar';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import { BookingContext } from '../context/BookingContext';
import CalendarPicker2 from '../components/CalendarPicker2';
import { useNavigate } from 'react-router-dom'

const PromoPage = () => {
    const { promoDetails } = useContext(BookingContext)
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "OSL Spaces | Promo"
        window.scrollTo(0, 0);
    }, [])
    
  return (
    <div>
        <div className='bg-[#19498C] min-h-[375px] relative'>
            <Navbar />

            <div className='pt-[90px] flex items-center flex-col gap-3'>
                <h3 className='text-white text-6xl font-bold'>Orchidsprings Booking</h3>

                <div className='text-white text-xl'>
                    <span>Home</span> <span className='mx-2'>|</span> <span className='text-secondary'>Promo</span>
                </div>
            </div>

            <section>
                <div className={`absolute bottom-0 rounded-tr-2xl p-2 text-[18px] bg-secondary text-white min-w-[200px] text-center uppercase font-semibold`}>{promoDetails.promoType} <span className='ml-1'>PROMO</span></div>
            </section>
        </div>


        <div className='bg-[#FBF9F2] py-[100px]'>
            <section>
                <CalendarPicker2 />
            </section>
        </div>



        <ScrollToTop />

        <div className=''>
            <Footer />
        </div>
    </div>
  )
}

export default PromoPage