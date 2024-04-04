import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='bg-[#083860] w-full pt-[100px] pb-[50px] flex flex-col items-center justify-center gap-6 md:gap-16 font-serif'>
        <div>
            <img src="/img/logo.png" className='max-h-[80px] object-contain' alt="" />
        </div>

        <div className='text-center text-white leading-7'>
            <p>Orchid Springs Limited is a registered Energy, Data and</p> 
            <p>Optimization consultancy. Our focus is on our clients' most</p>
            <p>Optimization consultancy. Our focus is on our clients' most critical concerns and opportunities.</p>
        </div>

        <div className='flex justify-center gap-5 text-white text-2xl'>
            <Link target='_blank' to=""><FaFacebookF /></Link>
            <Link target='_blank' to=""><FaTwitter /></Link>
            <Link target='_blank' to=""><FaLinkedin /></Link>
            <Link target='_blank' to=""><MdEmail /></Link>
        </div>

        <div>
            <p className='text-center text-white'>+234 806 578 4393</p>
        </div>

        <div className='text-center text-white'>
            <p>Dr. Nkereuwem Edemekong Street, Ewet Housing Extension Estate, Uyo,</p>
            <p>Akwa Ibom State,</p>
            <p>Nigeria.</p>
        </div>
    </div>
  )
}

export default Footer