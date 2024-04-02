import React, { useState } from 'react'
import { FaRegCalendarDays, FaRegCircleCheck } from "react-icons/fa6";
import { IoChevronDownSharp } from "react-icons/io5";
import { Select, Space } from 'antd';
import CalendarPicker1 from './CalendarPicker1';

const BookingCalendarSwitch = () => {
    const [tab, setTab] = useState(1)

    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
  return (
    <>
        <div className='rounded-tr-3xl grid grid-cols-2 max-w-[500px] bg-white font-semibold'>
            <span className={`p-3 md:py-4 text-center w-full cursor-pointer flex items-center gap-1 justify-center rounded-lt-3xl ${tab == 1 ? 'bg-white' : "bg-mydark text-white"}`} onClick={() => setTab(1)}><FaRegCalendarDays /> SPACE BOOKING</span>
            <span className={`p-3 md:py-4 text-center w-full cursor-pointer flex items-center gap-1 justify-center rounded-tr-3xl ${tab == 2 ? 'bg-white' : "bg-mydark text-white"}`} onClick={() => setTab(2)}><FaRegCircleCheck /> RETRIEVE BOOKING</span>
        </div>
        <div className=' bg-white w-full min-h-[300px] border border-red-700'>
            {
              (tab == 1) && (
                <div className='p-5 md:p-10'>
                    <div className='max-w-[170px] text-[14px]'>
                        <div className='flex justify-between font-semibold items-end'>
                            <span className='border-r-[2px] border-black pr-2 mr-2'> Spaces</span>
                            <span className='flex flex-col'>
                            <span className='text-[#DAB191] flex text-[12px] font-extralight'>Just from ₦3000</span>
                                <span>Book Here</span>
                            </span>
                        </div>
                    </div>

                    <div className='w-full bg-[#F8F3E7] min-h-[100px] rounded-lg mt-5 px-4 grid grid-cols-1 md:grid-cols-2'>
                        <div className='flex justify-start md:justify-end items-center'>
                            <div className='flex flex-col md:pr-4'>
                                <label htmlFor="space_type" className='text-[#DAB191] text-[12px] pl-1'>Spaces</label>
                                <select name="" id="space_type" defaultValue="single_spot" onChange={handleChange} className='bg-transparent border-0 md:min-w-[160px] outline-none text-[14px]'>
                                    <option value="conference_room" className='py-2'>Conference Room</option>
                                    <option value="single_spot">Single Spot</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <CalendarPicker1 />
                        </div>
                    </div>
                </div>
              )
            }

        </div>
    </>
  )
}

export default BookingCalendarSwitch