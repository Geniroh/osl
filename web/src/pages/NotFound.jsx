import React from 'react'
import { MdOutlineMoodBad } from "react-icons/md";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='bg-[#19498C] h-screen flex items-center justify-center'>
        {/* <Navbar /> */}

        <div className='flex items-center flex-col gap-3'>
            <div  className='text-white text-6xl lg:text-8xl font-semibold flex '><MdOutlineMoodBad /> <span>Ops</span></div>
            <h3 className='text-white text-6xl font-bold md:mt-5'>404 page not found</h3>

            <div className='text-white text-xl'>
                <Link to="/"><span className='text-secondary'>Go back Home</span></Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound