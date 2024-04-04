import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { CgCheck } from "react-icons/cg";


const ServiceSliderCards = () => {
  return (
    <div>
        <div className="flex justify-between items-center">
            <div className="flex flex-col">
                <span className="text-[#FDBB03] text-[14px] tracking-wider uppercase">WHY OSL SPACES</span>
                <span className="text-mydark font-bold text-3xl">Our Great Space Options</span>
            </div>

            <div className="flex gap-3">
                <span className='p-2 border shadow-sm rounded-md flex justify-center items-center text-2xl text-mydark cursor-pointer'><IoArrowBackOutline /></span>
                <span className='p-2 border shadow-sm rounded-md flex justify-center items-center text-2xl text-mydark cursor-pointer'><IoArrowForward /></span>
            </div>
        </div>

        <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-6 '>
            <div className='rounded-md bg-white shadow-md px-6 py-5'>
                <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
                <ul className='list-none'>
                    <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                    <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                    <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                </ul>
            </div>
            <div className='rounded-md bg-white shadow-md px-6 py-5'>
                <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
                <ul className='list-none'>
                    <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                    <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                    <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                    
                </ul>
            </div>
            <div className='rounded-md bg-white shadow-md px-6 py-5'>
                <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
                <ul className='list-none'>
                    <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                    <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                    <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                    
                </ul>
            </div>
            <div className='rounded-md bg-white shadow-md px-6 py-5'>
                <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
                <ul className='list-none'>
                    <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                    <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                    <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                    
                </ul>
            </div>
            <div className='rounded-md bg-white shadow-md px-6 py-5'>
                <h3 className='text-[#571336] text-2xl font-semibold mb-3'>Loyalty Tickets</h3>
                <ul className='list-none'>
                    <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Enjoy Top Deals</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                    <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Refre Friends</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                    <li className='w-full flex justify-between items-center text-md leading-8 text-gray-400'><span>Keep Earning</span> <CgCheck className='text-[#571336] font-semibold text-3xl' /></li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ServiceSliderCards