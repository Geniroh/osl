import React, { useContext, useEffect, useState } from 'react';
import Flatpickr from "react-flatpickr";
import dayjs from 'dayjs';
import "flatpickr/dist/themes/airbnb.css";
import { BookingContext } from '../context/BookingContext';

const CalendarPicker3 = () => {
    const { setStartDate, setEndDate, startDate, endDate } = useContext(BookingContext);

    const [selectedStartDate, setSelectedStartDate] = useState(startDate || new Date());
    const [selectedEndDate, setSelectedEndDate] = useState();

    const handleselectedStartDateChange = (selectedDates) => {
        const selectedDate = selectedDates[0];
        setSelectedStartDate(selectedDate);
        setStartDate(selectedDate)
        setSelectedEndDate(selectedDate);
    };

    const handleselectedEndDateChange = (selectedDates) => {
        setEndDate(selectedDates[0])
        setSelectedEndDate(selectedDates[0])
    }

    useEffect(() => {
        setStartDate(selectedStartDate)
        // setEndDate(selectedEndDate)
    })

    return (
        <div className='flex items-end flex-wrap justify-between md:justify-start w-full'>
            <div className='flex flex-col '>
                <span className='text-[#DAB191] text-[12px]'>Start Date</span>
                <Flatpickr 
                    value={selectedStartDate}
                    options={{
                        altInput: true,
                        altFormat: "F j, Y",
                        dateFormat: "Y-m-d",
                        minDate: 'today',
                        onChange: handleselectedStartDateChange
                    }}
                    placeholder={dayjs().format('YYYY-MM-DD')} 
                    className='bg-transparent border-0 text-[14px] md:text-[16px] cursor-pointer outline-none focus:outline-none'
                />
            </div>

            <div className='flex flex-col md:mt-0'>
                <span className='text-[#DAB191] text-[12px]'>End Date</span>
                <Flatpickr 
                    // value={selectedEndDate}
                    options={{
                        altInput: true,
                        altFormat: "F j, Y",
                        dateFormat: "Y-m-d",
                        minDate: selectedStartDate || 'today',
                    }}
                    placeholder={dayjs().format('YYYY-MM-DD')}
                    className='bg-transparent border-0 text-[14px] md:text-[16px] cursor-pointer outline-none focus:outline-none'
                    onChange={handleselectedEndDateChange}
                />
            </div>
        </div>
    );
}

export default CalendarPicker3;
