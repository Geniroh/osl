import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const backgrounds = ['img/logo.png', 'img/logo.png', 'image3.jpg'];
const texts = ['Text 1', 'Text 2', 'Text 3'];

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setFadeIn(true);
        setIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        setTimeout(() => setFadeIn(false), 1000);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, [index]);
  return (
    <div
      className="h-screen transition-all duration-500 border border-red-600"
      style={{
        backgroundImage: `url('/${backgrounds[index]}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
        <Navbar />
        {/* <div className='bg-blue-600/60 absolute top-0 left-0 h-full w-full'></div> */}
        <div
            className={`text-white text-4xl font-bold ${!fadeIn && 'opacity-0'} ${fadeIn && 'opacity-100'}`}
            style={{ transition: 'opacity 0.5s' }}
        >
            {texts[index]}
        </div>
    </div>
  )
}

export default Hero