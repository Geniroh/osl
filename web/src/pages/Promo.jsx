import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import CalendarPicker2 from '../components/CalendarPicker2';
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { api } from '../api/api';
import { resources } from '../api/resources';
import { message } from 'antd';

const PromoPage = () => {
    const [isValidPromo, setIsValidPromo] = useState(false)
    const navigate = useNavigate()

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get('type');
    const code = searchParams.get('code');

    const checkPromo = async () => {

        if(!type) {
            navigate("/", {replace: true})
            message.error("There was an error in the promo link")
            return
        }

        try {
            const { data } = await api.get(resources.promoUrl +`/${code}`)
            if(data) {
                setIsValidPromo(true)
            }
        } catch (error) {
            message.error("Network Error!")
        }
    }

    useEffect(() => {
        document.title = "OSL Spaces | Promo"
        window.scrollTo(0, 0);

        checkPromo()
    }, [])
    
  return (
    <div>
        <div className='bg-[#19498C] min-h-[375px] relative'>
            <Navbar />

            <div className='pt-[90px] flex items-center flex-col gap-3'>
                <h3 className='text-white text-6xl font-bold'>Orchidsprings Booking</h3>

                <div className='text-white text-xl'>
                    <Link to="/"><span>Home</span></Link> <span className='mx-2'>|</span> <span className='text-secondary'>Promo</span>
                </div>
            </div>

            <section>
                <div className={`absolute bottom-0 rounded-tr-2xl p-2 text-[18px] bg-secondary text-white min-w-[200px] text-center uppercase font-semibold`}>{type} <span className='ml-1'>PROMO</span></div>
            </section>
        </div>


        <div className='bg-[#FBF9F2] py-[100px]'>

            {
                isValidPromo ? 
                (
                    <section>
                        <CalendarPicker2 />
                    </section>
                ) : (
                    <section>
                        <div className='w-full bg-[#F8F3E7] rounded-2xl py-5 px-3 flex justify-center items-center text-xl'>
                            Sorry, but this Promo code does not exist, contact <a href="mailto:info@orchidsprings.group" className='text-secondary underline px-1'>info@orchidsprings.group</a> for more information
                        </div>
                    </section>
                )
            }
            

            
        </div>



        <ScrollToTop />

        <div className=''>
            <Footer />
        </div>
    </div>
  )
}

export default PromoPage
