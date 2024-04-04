import React, { useState } from 'react'

import "flatpickr/dist/themes/airbnb.css";

import Flatpickr from "react-flatpickr";
import dayjs from 'dayjs';
import { message } from 'antd'
import { separateDates } from '../utils/function';

const CalendarPicker3 = () => {
    const [bookingDates, setBookingDates] = useState([])
    const [endDateStart, setEndDateStart] = useState([])    

    const handleChange = (test) => {
        console.log(test)
        console.log(separateDates(test))
    }
  return (
    <div className='flex items-end flex-wrap justify-center md:justify-start'>
        <div className='flex flex-col '>
            <span className='text-[#DAB191] text-[12px]'>Start Date</span>
            <Flatpickr 
                 options={{
                    altInput: true,
                    altFormat: "F j, Y",
                    dateFormat: "Y-m-d",
                    minDate: 'today',
                    mode: 'single'
                }}
                placeholder={dayjs().format('YYYY-MM-DD')} 
                className='bg-transparent border-0 text-[14px] cursor-pointer'
                onChange={handleChange}
            />
        </div>

        <div className='flex flex-col md:mt-0'>
            <span className='text-[#DAB191] text-[12px]'>End Date</span>
            <Flatpickr 
                 options={{
                    altInput: true,
                    altFormat: "F j, Y",
                    dateFormat: "Y-m-d",
                    minDate: 'today'
                }}
                placeholder={dayjs().format('YYYY-MM-DD')} // Corrected format
                className='bg-transparent border-0 text-[14px] cursor-pointer'
            />
        </div>

        {/* <div className='flex flex-col md:mt-0'>
            <span className='text-[#DAB191] text-[12px]'>Test Date</span>
            <Flatpickr 
                 options={{
                    altInput: true,
                    altFormat: "F j, Y",
                    dateFormat: "Y-m-d",
                    minDate: 'today',
                    mode: 'range',
                }}
                placeholder={`${dayjs().format('YYYY-MM-DD')} to ... `} // Corrected format
                className='bg-transparent border-0 text-[14px] cursor-pointer'
                onChange={handleChange}
                readOnly
                disabled
            />
        </div> */}
    </div>
  )
}

export default CalendarPicker3


