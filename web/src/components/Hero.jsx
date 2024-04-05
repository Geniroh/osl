import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import BookingCalendarSwitch from './BookingCalendarSwitch';

const highlights = [
    {
        id: 1,
        heading: "Unlock Your Ideal Space? It's Genius.",
        subtile: "Get your ideas out – Checkout our cool spaces, birth the next best thing.",
        background: "offer_img01.jpg"
    },
    {
        id: 2,
        heading: "Ideal Space With Class? It's Genius.",
        subtile: "Get your ideas out – Checkout our cool spaces, birth the next best thing.",
        background: "offer_img06.jpg"
    },
    {
        id: 3,
        heading: "Ideal Space with functionalities? It's Genius.",
        subtile: "Get your ideas out – Checkout our cool spaces, birth the next best thing.",
        background: "imgSpace4.jpg"
    },
    {
        id:4,
        heading: "Ideal Space With Add-ons? It's Genius.",
        subtile: "Get your ideas out – Checkout our cool spaces, birth the next best thing.",
        background: "img_ac.jpg"
    }
]

const HeroBg = () => {
  const [index, setIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
      setIndex((prevIndex) => (prevIndex + 1) % highlights.length);
      setTimeout(() => setFadeIn(false), 1000);
    }, 5000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className="h-[85vh] md:h-screen lg:h-screen transition-all duration-1000  slider-bg"
      style={{ backgroundImage: `url('/img/${highlights[index].background}')`}}
    >
        <Navbar />

        <div className="px-8 md:px-20 py-6 md:py-20">
            <div className={` text-white transition-all duration-1000 translate-y-0 opacity-100 ${ fadeIn && 'translate-y-2 opacity-0'}`} >

                <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold max-w-[900px] `} style={{ transition: 'opacity 0.2s' }}>{highlights[index].heading}</h2>
                <p className={`text-md md:text-xl font-extralight text-[#EAE8E8] mt-4 mb-8 opacity-0:${!fadeIn} opacity-100:${fadeIn}`} >{highlights[index].subtile}</p>
                <Link to="/" className={`px-4 py-3 md:px-6 md:py-4 text-[18px] font-semibold bg-secondary text-[#2A2A2A] hover:bg-white rounded-lg opacity-0:${!fadeIn} opacity-100:${fadeIn}`} style={{ transition: 'opacity 0.4s' }}>Check us out!</Link>
            </div>

            <div className='mt-20'>
                <BookingCalendarSwitch />
            </div>
        </div>
    </div>
  );
};

export default HeroBg;