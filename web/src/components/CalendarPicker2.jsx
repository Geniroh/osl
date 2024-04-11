import React, { useContext, useEffect, useState } from 'react';
import Flatpickr from "react-flatpickr";
import dayjs from 'dayjs';
import "flatpickr/dist/themes/airbnb.css";
import { BookingContext } from '../context/BookingContext';
import { GoArrowSwitch } from "react-icons/go";
import { calculateDays } from '../utils/function';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

const CalendarPicker2 = () => {
    const { setStartDate, setEndDate, startDate, endDate, promoDetails } = useContext(BookingContext);

    const [selectedStartDate, setSelectedStartDate] = useState(startDate || new Date());
    const [selectedEndDate, setSelectedEndDate] = useState();
    const [disableBtn, setDisableBtn] = useState(true);
    const navigate = useNavigate()

    const handleselectedStartDateChange = (selectedDates) => {
        const selectedDate = selectedDates[0];
        setSelectedStartDate(selectedDate);
        setStartDate(selectedDate)
        setSelectedEndDate(selectedDate);
    };

    const handleselectedEndDateChange = (selectedDates) => {
        setEndDate(selectedDates[0])
        setSelectedEndDate(selectedDates[0])

        checkCriteria(promoDetails.promoType, startDate, selectedDates[0])
    }

    const checkCriteria = (type, startDate, endDate) => {
        console.log("here")
        if(type == 'Daily') {
            const days = calculateDays(startDate, endDate)
            if(days > 1) {
                message.error("Please this promo is valid for a single day selection")
                return
            } 

            setDisableBtn(false)
        } else if(type == 'Weekly') {
            const days = calculateDays(startDate, endDate)

            if (days < 7) {
                message.error("Please you must select for more than a week to qualify")
                return
            }

            setDisableBtn(false)
        } else {
            setDisableBtn(false)
        }
    }

    const handleSelectSpots = () => {
        if(!startDate || !endDate) {
            message.error("Please you need to select a start and end date to proceed!")
        } else {
            navigate(`/booking?pcode=${promoDetails.pcode}`,)
        }
    }

    useEffect(() => {
        setStartDate(selectedStartDate)
    })

    return (
        <>
            <div className='w-full bg-[#F8F3E7] rounded-2xl py-5 px-3 flex justify-center items-center'>
                <div className='flex gap-6'>
                    <div className='flex flex-col'>
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

                    <div className='min-w-[172px] flex justify-center items-center'>
                        <div className='bg-white p-3 rounded-full flex items-center justify-center'>
                            <GoArrowSwitch />
                        </div>
                    </div>

                    <div className='flex flex-col'>
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
            </div>

            <div className='mt-5 flex justify-end'>
                <div className='flex gap-5'>
                    <div className='border border-secondary py-3 px-4 uppercase'>
                        OSHGJHJK
                    </div>
                    <button className={`px-4 py-3 md:px-6 md:py-4 text-[16px] font-semibold ${ disableBtn ? 'bg-[#e4e4e4] text-[#D8D7D3] cursor-not-allowed' : 'bg-secondary text-mydark hover:bg-mydark hover:text-white'}  rounded-lg`} onClick={handleSelectSpots} disabled={disableBtn}>Select Spots</button>
                </div>
            </div>
        </>
    );
}

export default CalendarPicker2;
