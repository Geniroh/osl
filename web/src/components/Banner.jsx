import React from 'react'
import { BsFillPeopleFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='destination-bg min-h-[300px] py-[100px] px-5 md:px-20' style={{ backgroundImage: 'url("/img/img7.jpg")'}}>
        <div className='w-full relative'>
            <h3 className='text-white bg-secondary tracking-wider uppercase rounded-3xl px-3 py-1 w-fit mb-5'>PROMO DEALS</h3>

            <h2 className='text-white text-4xl leading-9 font-semibold mb-3'>Your Efficient Work Space</h2>
            <p className='text-white max-w-[500px] text-xl leading-7 font-light '>
                Get rewarded for your space subscription with a free <span className='text-primary'>OSL Spaces</span> account
            </p>

            <div className="flex flex-wrap gap-5 my-5">
                <div className='rounded-2xl bg-white p-5 flex gap-3 items-center justify-between max-w-[300px] w-full'>
                    <div className='flex flex-col text-3xl'>
                        <span className='font-bold'>24+</span>
                        <span className='text-sm'>Happy Customers</span>
                    </div>
                    <BsFillPeopleFill className='text-5xl' />
                </div>
                <div className='rounded-2xl bg-white p-5 flex gap-3 items-center justify-between max-w-[300px] w-full'>
                    <div className='flex flex-col text-3xl'>
                        <span className='font-bold'>100%</span>
                        <span className='text-sm'>CLients Satisfied</span>
                    </div>
                    <TbWorld className='text-5xl' />
                </div>
            </div>

            <p className='text-white text-xl leading-7 font-light '>
                Discover the latest promo's & news and start planning   
                <Link to="/contact" className='ml-2 px-2 text-white uppercase text-lg bg-secondary tracking-wider py-1 rounded-3xl font-semibold'>CONTACT US</Link>
            </p>
        </div>
    </div>
  )
}

export default Banner