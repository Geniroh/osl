import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import BookingCalendarSwitch from './BookingCalendarSwitch';
import { motion, AnimatePresence } from 'framer-motion';

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
        id: 4,
        heading: "Ideal Space With Add-ons? It's Genius.",
        subtile: "Get your ideas out – Checkout our cool spaces, birth the next best thing.",
        background: "img_ac.jpg"
    }
];

const HeroBg = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % highlights.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div
            className="h-[85vh] md:h-screen lg:h-screen transition-all duration-1000  slider-bg"
            style={{ backgroundImage: `url('/img/${highlights[index].background}')` }}
        >
            <Navbar />


            <AnimatePresence>
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 1 }}
                    className="px-8 md:px-20 py-6 md:py-20"
                >
                    <div className="text-white">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-[900px]">
                            {highlights[index].heading}
                        </h2>
                        <p className="text-md md:text-xl font-extralight text-[#EAE8E8] mt-4 mb-8">
                            {highlights[index].subtile}
                        </p>
                        <Link
                            to="/"
                            className="px-4 py-3 md:px-6 md:py-4 text-[18px] font-semibold bg-secondary text-[#2A2A2A] hover:bg-white rounded-lg"
                        >
                            Check us out!
                        </Link>
                    </div>

                    <div className="mt-20">
                        <BookingCalendarSwitch />
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default HeroBg;

        {/* <div className="px-8 md:px-20 py-6 md:py-20">
            <div className={` text-white transition-all duration-1000 translate-y-0 opacity-100 ${ fadeIn && 'translate-y-2 opacity-0'}`} >

                <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold max-w-[900px] `} style={{ transition: 'opacity 0.2s' }}>{highlights[index].heading}</h2>
                <p className={`text-md md:text-xl font-extralight text-[#EAE8E8] mt-4 mb-8 opacity-0:${!fadeIn} opacity-100:${fadeIn}`} >{highlights[index].subtile}</p>
                <Link to="/" className={`px-4 py-3 md:px-6 md:py-4 text-[18px] font-semibold bg-secondary text-[#2A2A2A] hover:bg-white rounded-lg opacity-0:${!fadeIn} opacity-100:${fadeIn}`} style={{ transition: 'opacity 0.4s' }}>Check us out!</Link>
            </div>

            <div className='mt-20'>
                <BookingCalendarSwitch />
            </div>
        </div> */}


// import React from 'react';
// import { motion } from 'framer-motion';

// const FadeInUp = ({ children }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: '100%' }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default FadeInUp;

