// import React, { useState } from 'react';
// import Flatpickr from 'react-flatpickr';
// import dayjs from 'dayjs';
// import { message } from 'antd';
// import { separateDates } from '../utils/function';

// const CalendarPicker3 = () => {
//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');

//     const handleDateChange = (selectedDates) => {
//         if (selectedDates && selectedDates.length === 2) {
//             const { startDate, endDate } = separateDates(selectedDates);
//             setStartDate(startDate);
//             setEndDate(endDate);
//         } else {
//             setStartDate('');
//             setEndDate('');
//         }
//     };

//     return (
//         <div className="flex items-end flex-wrap justify-center md:justify-start">
//             <div className="flex flex-col">
//                 <span className="text-[#DAB191] text-[12px]">Start Date</span>
//                 <Flatpickr
//                     options={{
//                         altInput: true,
//                         altFormat: 'F j, Y',
//                         dateFormat: 'Y-m-d',
//                         minDate: 'today',
//                     }}
//                     placeholder={dayjs().format('YYYY-MM-DD')}
//                     className="bg-transparent border-0 text-[14px] cursor-pointer"
//                     onChange={handleDateChange}
//                     value={startDate}
//                 />
//             </div>

//             <div className="flex flex-col md:mt-0">
//                 <span className="text-[#DAB191] text-[12px]">End Date</span>
//                 <input
//                     type="text"
//                     value={endDate}
//                     readOnly
//                     className="bg-transparent border-0 text-[14px] cursor-not-allowed"
//                 />
//             </div>
//         </div>
//     );
// };

// export default CalendarPicker3;



// import React, { useState } from 'react';
// import Flatpickr from 'react-flatpickr';
// import dayjs from 'dayjs';
// import { message } from 'antd';
// import { separateDates } from '../utils/function';

// const CalendarPicker3 = () => {
//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');

//     const handleStartDateChange = (selectedDates) => {
//         const selectedStartDate = selectedDates[0] || '';
//         setStartDate(selectedStartDate);
//         setEndDate('');
//     };

//     const handleEndDateChange = (selectedDates) => {
//         const selectedEndDate = selectedDates[0] || '';
//         if (selectedEndDate < startDate) {
//             message.error('End date cannot be earlier than start date');
//             setEndDate('');
//         } else {
//             setEndDate(selectedEndDate);
//         }
//     };

//     return (
//         <div className="flex items-end flex-wrap justify-center md:justify-start">
//             <div className="flex flex-col">
//                 <span className="text-[#DAB191] text-[12px]">Start Date</span>
//                 <Flatpickr
//                     options={{
//                         altInput: true,
//                         altFormat: 'F j, Y',
//                         dateFormat: 'Y-m-d',
//                         minDate: 'today',
//                     }}
//                     placeholder={dayjs().format('YYYY-MM-DD')}
//                     className="bg-transparent border-0 text-[14px] cursor-pointer"
//                     onChange={handleStartDateChange}
//                 />
//             </div>

//             <div className="flex flex-col md:mt-0">
//                 <span className="text-[#DAB191] text-[12px]">End Date</span>
//                 <Flatpickr
//                     options={{
//                         altInput: true,
//                         altFormat: 'F j, Y',
//                         dateFormat: 'Y-m-d',
//                         minDate: startDate || 'today',
//                     }}
//                     placeholder={dayjs().format('YYYY-MM-DD')}
//                     className="bg-transparent border-0 text-[14px] cursor-pointer"
//                     onChange={handleEndDateChange}
//                 />
//             </div>
//         </div>
//     );
// };

// export default CalendarPicker3;

// import React from 'react';

// const SliderCard = ({ title, description, image }) => {
//   return (
//     <div className="flex flex-col justify-center items-center bg-gray-100 h-64 p-4">
//       <img src={image} alt={title} className="w-full mb-4" />
//       <h3 className="text-lg font-semibold mb-2">{title}</h3>
//       <p className="text-sm">{description}</p>
//     </div>
//   );
// };

// export default SliderCard;

// import React from 'react';
// import Slider from './Slider';
// import SliderCard from './SliderCard';

// const cardData = [
//   {
//     title: 'Card 1',
//     description: 'Description for Card 1',
//     image: '/path/to/image1.jpg'
//   },
//   {
//     title: 'Card 2',
//     description: 'Description for Card 2',
//     image: '/path/to/image2.jpg'
//   },
//   {
//     title: 'Card 3',
//     description: 'Description for Card 3',
//     image: '/path/to/image3.jpg'
//   }
// ];

// const App = () => {
//   return (
//     <div>
//       <Slider cards={cardData} />
//     </div>
//   );
// };

// export default App;

// import React from 'react'
// import { IoArrowBackOutline } from "react-icons/io5";
// import { IoArrowForward } from "react-icons/io5";
// import { CgCheck } from "react-icons/cg";


// const ServiceSliderCards = () => {
//   return (
//     <div>
//         <div className="flex justify-between items-center">
//             <div className="flex flex-col">
//                 <span className="text-[#FDBB03] text-[14px] tracking-wider uppercase">WHY OSL SPACES</span>
//                 <span className="text-mydark font-bold text-3xl">Our Great Space Options</span>
//             </div>

//             <div className="flex gap-3">
//                 <span className='p-2 border shadow-sm rounded-md flex justify-center items-center text-2xl text-mydark cursor-pointer'><IoArrowBackOutline /></span>
//                 <span className='p-2 border shadow-sm rounded-md flex justify-center items-center text-2xl text-mydark cursor-pointer'><IoArrowForward /></span>
//             </div>
//         </div>

//         <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-6 '>
//             <div className='rounded-md bg-white shadow-md px-6 py-5'>
//                 <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                 <ul className='list-none'>
//                     <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                     <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                     <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                 </ul>
//             </div>
//             <div className='rounded-md bg-white shadow-md px-6 py-5'>
//                 <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                 <ul className='list-none'>
//                     <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                     <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                     <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                    
//                 </ul>
//             </div>
//             <div className='rounded-md bg-white shadow-md px-6 py-5'>
//                 <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                 <ul className='list-none'>
//                     <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                     <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                     <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                    
//                 </ul>
//             </div>
//             <div className='rounded-md bg-white shadow-md px-6 py-5'>
//                 <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                 <ul className='list-none'>
//                     <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                     <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                     <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                    
//                 </ul>
//             </div>
//             <div className='rounded-md bg-white shadow-md px-6 py-5'>
//                 <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                 <ul className='list-none'>
//                     <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                     <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                     <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                    
//                 </ul>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ServiceSliderCards
// import React from "react";
// import Slider from "react-slick";

// export default function SimpleSlider() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return (
//     <Slider {...settings}>
//       <div>
//         <h3>1</h3>
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <h3>3</h3>
//       </div>
//       <div>
//         <h3>4</h3>
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>
//       <div>
//         <h3>6</h3>
//       </div>
//     </Slider>
//   );
// }

// import React, { useRef } from 'react';
// import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
// import { CgCheck } from "react-icons/cg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ServiceSliderCards = () => {
//     const sliderRef = useRef();

//     const sliderSettings = {
//         dots: true,
//         slidesToShow: 3,
//         infinite: true,
//         speed: 500,
//         arrows: false // Disable default arrows
//     };

//     const goToPrev = () => {
//         sliderRef.current.slickPrev(); // Navigate to previous slide
//     };

//     const goToNext = () => {
//         sliderRef.current.slickNext(); // Navigate to next slide
//     };

//     return (
//         <div>
//             <div className="flex justify-between items-center">
//                 <div className="flex flex-col">
//                     <span className="text-[#FDBB03] text-[14px] tracking-wider uppercase">WHY OSL SPACES</span>
//                     <span className="text-mydark font-bold text-3xl">Our Great Space Options</span>
//                 </div>

//                 <div className="flex gap-3">
//                     {/* Custom arrows */}
//                     <span className="p-2 border shadow-sm rounded-md flex justify-center items-center text-2xl text-mydark cursor-pointer" onClick={goToPrev}><IoArrowBackOutline /></span>
//                     <span className="p-2 border shadow-sm rounded-md flex justify-center items-center text-2xl text-mydark cursor-pointer" onClick={goToNext}><IoArrowForward /></span>
//                 </div>
//             </div>

//             <div className="mt-5 slider-container">
//                 <Slider ref={sliderRef} {...sliderSettings}>
//                   <div className='rounded-md bg-white shadow-md px-6 py-5'>
//                       <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                       <ul className='list-none'>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                       </ul>
//                   </div>
//                   <div className='rounded-md bg-white shadow-md px-6 py-5'>
//                       <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                       <ul className='list-none'>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                          
//                       </ul>
//                   </div>
//                   <div className='rounded-md bg-white shadow-md px-6 py-5  md:mx-4'>
//                       <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                       <ul className='list-none'>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                          
//                       </ul>
//                   </div>
//                   <div className='rounded-md bg-white shadow-md px-6 py-5'>
//                       <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                       <ul className='list-none'>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                          
//                       </ul>
//                   </div>
//                   <div className='rounded-md bg-white shadow-md px-6 py-5'>
//                       <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                       <ul className='list-none'>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                          
//                       </ul>
//                   </div>
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// export default ServiceSliderCards;

// import React, { useRef } from 'react';
// import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
// import { CgCheck } from "react-icons/cg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ServiceSliderCards = () => {
//     const sliderRef = useRef();

//     const sliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         arrows: false, // Disable default arrows
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };

//     const goToPrev = () => {
//         sliderRef.current.slickPrev(); // Navigate to previous slide
//     };

//     const goToNext = () => {
//         sliderRef.current.slickNext(); // Navigate to next slide
//     };

//     return (
//         <div>
//             <div className="flex justify-between items-center">
//                 <div className="flex flex-col">
//                     <span className="text-[#FDBB03] text-[14px] tracking-wider uppercase">WHY OSL SPACES</span>
//                     <span className="text-mydark font-bold text-3xl">Our Great Space Options</span>
//                 </div>

//                 <div className="flex gap-3">
//                     {/* Custom arrows */}
//                     <span className="p-2 border shadow-sm rounded-md flex justify-center items-center text-2xl text-mydark cursor-pointer" onClick={goToPrev}><IoArrowBackOutline /></span>
//                     <span className="p-2 border shadow-sm rounded-md flex justify-center items-center text-2xl text-mydark cursor-pointer" onClick={goToNext}><IoArrowForward /></span>
//                 </div>
//             </div>

//             <div className="mt-5 slider-container">
//                 <Slider ref={sliderRef} {...sliderSettings}>
//                     <div className="rounded-md bg-white shadow-md px-6 py-5 mx-2">
//                     <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                       <ul className='list-none'>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                          
//                       </ul>
//                     </div>
//                     <div className="rounded-md bg-white shadow-md px-6 py-5 mx-2">
//                     <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                       <ul className='list-none'>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                          
//                       </ul>
//                     </div>
//                     <div className="rounded-md bg-white shadow-md px-6 py-5 mx-2">
//                     <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                       <ul className='list-none'>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                          
//                       </ul>
//                     </div>
//                     <div className="rounded-md bg-white shadow-md px-6 py-5 mx-2">
//                     <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                       <ul className='list-none'>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                          
//                       </ul>
//                     </div>
//                     <div className="rounded-md bg-white shadow-md px-6 py-5 mx-2">
//                     <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                       <ul className='list-none'>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                           <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                          
//                       </ul>
//                     </div>
//                     {/* Add more cards here */}
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// export default ServiceSliderCards;

// import React, { useRef, useState, useEffect } from 'react';
// import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
// import { CgCheck } from "react-icons/cg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ServiceSliderCards = () => {
//     const sliderRef = useRef();
//     const [slidesToShow, setSlidesToShow] = useState(3); // Default number of slides to show

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 1024) {
//                 setSlidesToShow(3); // Show 3 slides on desktop
//             } else if (window.innerWidth >= 768) {
//                 setSlidesToShow(2); // Show 2 slides on tablet
//             } else {
//                 setSlidesToShow(1); // Show 1 slide on mobile
//             }
//         };

//         window.addEventListener('resize', handleResize);

//         handleResize();

//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     const sliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         arrows: false,
//         slidesToShow: slidesToShow,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };

//     const goToPrev = () => {
//         sliderRef.current.slickPrev();
//     };

//     const goToNext = () => {
//         sliderRef.current.slickNext();
//     };

//     return (
//         <div>
//             <div className="flex justify-between items-center">
//                 <div className="flex flex-col">
//                     <span className="text-[#FDBB03] text-[14px] tracking-wider uppercase">WHY OSL SPACES</span>
//                     <span className="text-mydark font-bold text-3xl">Our Great Space Options</span>
//                 </div>

//                 <div className="flex gap-3">
//                     <span className="p-2 border shadow-sm rounded-md flex justify-center items-center text-2xl text-mydark cursor-pointer" onClick={goToPrev}><IoArrowBackOutline /></span>
//                     <span className="p-2 border shadow-sm rounded-md flex justify-center items-center text-2xl text-mydark cursor-pointer" onClick={goToNext}><IoArrowForward /></span>
//                 </div>
//             </div>

//             <div className="mt-5 slider-container">
//                 <Slider ref={sliderRef} {...sliderSettings}>
//                   <div className="rounded-md bg-white shadow-md px-6 py-5 md:mx-4 lg:mx-6">
//                     <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                     <ul className='list-none'>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                        
//                     </ul>
//                   </div>
//                   <div className="rounded-md bg-white shadow-md px-6 py-5 md:mx-4 lg:mx-6">
//                     <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                     <ul className='list-none'>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                        
//                     </ul>
//                   </div>
//                   <div className="rounded-md bg-white shadow-md px-6 py-5 md:mx-4 lg:mx-6">
//                     <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                     <ul className='list-none'>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                        
//                     </ul>
//                   </div>
//                   <div className="rounded-md bg-white shadow-md px-6 py-5 md:mx-4 lg:mx-6">
//                     <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                     <ul className='list-none'>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                        
//                     </ul>
//                   </div>
//                   <div className="rounded-md bg-white shadow-md px-6 py-5 md:mx-4 lg:mx-6">
//                     <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                     <ul className='list-none'>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                        
//                     </ul>
//                   </div>
//                   <div className="rounded-md bg-white shadow-md px-6 py-5 md:mx-4 lg:mx-6">
//                     <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                     <ul className='list-none'>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                        
//                     </ul>
//                   </div>
//                   <div className="rounded-md bg-white shadow-md px-6 py-5 md:mx-4 lg:mx-6">
//                     <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
//                     <ul className='list-none'>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
//                         <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                        
//                     </ul>
//                   </div>
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// export default ServiceSliderCards;

// import React, { useRef, useState, useEffect } from 'react';
// import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
// import { CgCheck } from "react-icons/cg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ServiceSliderCards = () => {
//     const sliderRef = useRef();
//     const [slidesToShow, setSlidesToShow] = useState(3);
//     const [autoScrollInterval, setAutoScrollInterval] = useState(null);

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 1024) {
//                 setSlidesToShow(3);
//             } else if (window.innerWidth >= 768) {
//                 setSlidesToShow(2);
//             } else {
//                 setSlidesToShow(1);
//             }
//         };

//         window.addEventListener('resize', handleResize);
//         handleResize();

//         return () => {
//             window.removeEventListener('resize', handleResize);
//             clearInterval(autoScrollInterval);
//         };
//     }, []);

//     useEffect(() => {
//         if (!autoScrollInterval) {
//             setAutoScrollInterval(setInterval(() => {
//                 sliderRef.current.slickNext();
//             }, 2000));
//         }

//         return () => {
//             clearInterval(autoScrollInterval);
//         };
//     }, [autoScrollInterval]);

//     const sliderSettings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         arrows: false,
//         slidesToShow: slidesToShow,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };

//     const handleCardHover = () => {
//         clearInterval(autoScrollInterval);
//         setAutoScrollInterval(null);
//     };

//     return (
//         <div>
//             <section>
//                 <div className="flex justify-between items-center">
//                     <div className="flex flex-col">
//                         <span className="text-[#FDBB03] text-[14px] tracking-wider uppercase">WHY OSL SPACES</span>
//                         <span className="text-mydark font-bold text-3xl">Our Great Space Options</span>
//                     </div>

//                     <div className="flex gap-3">
//                         <span className="p-2 border shadow-sm rounded-md flex justify-center items-center text-2xl text-mydark cursor-pointer" onClick={() => sliderRef.current.slickPrev()}><IoArrowBackOutline /></span>
//                         <span className="p-2 border shadow-sm rounded-md flex justify-center items-center text-2xl text-mydark cursor-pointer" onClick={() => sliderRef.current.slickNext()}><IoArrowForward /></span>
//                     </div>
//                 </div>
//             </section>

//             <section className="mt-5 mb-10">
//                 <Slider ref={sliderRef} {...sliderSettings}>
//                     <div className="rounded-md bg-white shadow-lg px-6 py-5 md:px-8 md:py-8 max-w-[350px]" onMouseEnter={handleCardHover}>
//                         {/* Content */}
//                     </div>
//                     {/* Additional slides */}
//                 </Slider>
//             </section>
//         </div>
//     );
// };

// export default ServiceSliderCards;

// import React, { useState } from 'react';
// import { Button, Modal } from 'antd';
// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button>
//       <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Modal>
//     </>
//   );
// };
// export default App;

import React from 'react';
import { Flex, Spin } from 'antd';
const App = () => (
  <Flex align="center" gap="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Flex>
);
export default App;

