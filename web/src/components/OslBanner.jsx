import React from 'react';
// import './OslBanner.css'; // Import CSS for animation

const OslBanner = () => {
  return (
    <div className='h-[200px] bg-mydark px-10 md:px-20 flex items-center justify-center'>
      <img src="/img/logo.png" className='h-[160px] fade-in-out object-contain' alt="" />
    </div>
  );
}

export default OslBanner;
