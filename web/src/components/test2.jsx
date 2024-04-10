// import React, { useRef, useState, useEffect } from 'react';
// import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
// import { CgCheck } from "react-icons/cg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ServiceSliderCards = () => {
//     const sliderRef = useRef(null);
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
//         if (!autoScrollInterval && sliderRef.current) {
//             setAutoScrollInterval(setInterval(() => {
//                 sliderRef.current.slickNext();
//             }, 6000));
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

//     const goToPrev = () => {
//         if (sliderRef.current) {
//             sliderRef.current.slickPrev();
//         }
//     };

//     const goToNext = () => {
//         if (sliderRef.current) {
//             sliderRef.current.slickNext();
//         }
//     };

//     const handleCardHover = () => {
//         clearInterval(autoScrollInterval);
//         setAutoScrollInterval(null);
//     };

//     return (
//         <div className='transition-all duration-300 ease-in-out'>
//             <section>
//                 <div className="flex justify-between items-center">
//                     <div className="flex flex-col">
//                         <span className="text-[#FDBB03] text-[14px] tracking-wider uppercase">WHY OSL SPACES</span>
//                         <span className="text-mydark font-bold text-3xl">Our Great Space Options</span>
//                     </div>

//                     <div className="flex gap-3">
//                         <span className="p-2 border shadow-sm rounded-md flex justify-center items-center text-2xl text-mydark cursor-pointer" onClick={goToPrev}><IoArrowBackOutline /></span>
//                         <span className="p-2 border shadow-sm rounded-md flex justify-center items-center text-2xl text-mydark cursor-pointer" onClick={goToNext}><IoArrowForward /></span>
//                     </div>
//                 </div>
//             </section>

//             <section className="mt-5 mb-10">
//                 <Slider ref={sliderRef} {...sliderSettings}>
//                     {/* Your slider items */}
//                 </Slider>
//             </section>
//         </div>
//     );
// };

// export default ServiceSliderCards;


