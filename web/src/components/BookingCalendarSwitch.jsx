import React, { useState } from 'react'
import { FaRegCalendarDays, FaRegCircleCheck } from "react-icons/fa6";

const BookingCalendarSwitch = () => {
    const [tab, setTab] = useState(1)
  return (
    <>
        <div className='rounded-tr-3xl grid grid-cols-2 max-w-[500px] bg-white font-semibold'>
            <span className={`p-3 md:py-4 text-center w-full cursor-pointer flex items-center gap-1 justify-center ${tab == 1 ? 'bg-white' : "bg-mydark text-white"}`} onClick={() => setTab(1)}><FaRegCalendarDays /> SPACE BOOKING</span>
            <span className={`p-3 md:py-4 text-center w-full cursor-pointer flex items-center gap-1 justify-center rounded-tr-3xl ${tab == 2 ? 'bg-white' : "bg-mydark text-white"}`} onClick={() => setTab(2)}><FaRegCircleCheck /> RETRIEVE BOOKING</span>
        </div>
        <div className=' bg-white w-full min-h-[300px] border border-red-700'>


        </div>
    </>
  )
}

export default BookingCalendarSwitch