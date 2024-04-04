import React, { useState, useEffect } from 'react';
// import SliderCard from './SliderCard'; // Assuming SliderCard is another component you've created

const Slider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment index with wrap-around behavior
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [cards.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`transform transition-transform ease-out duration-300 ${
              index === currentIndex ? 'translate-x-0' : '-translate-x-full'
            } md:block md:w-1/3`}
          >
            {/* <SliderCard {...card} /> */}
            <div className='bg-white h-[100px]'>

            </div>
          </div>
        ))}
      </div>
      {cards.length > 1 && (
        <div className="absolute top-0 left-0 flex justify-between w-full px-4 md:px-8">
          <button className="hidden md:flex items-center justify-center h-10 w-10 bg-gray-900 bg-opacity-50 text-white rounded-full" onClick={goToPrev}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="hidden md:flex items-center justify-center h-10 w-10 bg-gray-900 bg-opacity-50 text-white rounded-full" onClick={goToNext}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;
