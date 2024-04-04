import React, { useState } from 'react';
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { IoChevronUpCircleOutline } from "react-icons/io5";
import { FaRegCircleDot } from "react-icons/fa6";
import { FaPlus, FaMinus } from "react-icons/fa";

const MyAccordion = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`w-full ${ isOpen ? 'bg-[#083860] text-white': 'bg-[#EBEBEE] text-[#083860]'}  transition-all duration-500 ease-in-out p-6`}>

            <div className='flex justify-between items-center cursor-pointer' onClick={toggleAccordion}>
                <div className='flex items-center gap-3 capitalize font-bold'>
                    <FaRegCircleDot className='text-lg text-[#D7CED6]' />
                    <h3 className={`text-2xl ${isOpen ? 'text-white': 'text-[#083860]' }`}>{title}</h3>
                </div>

                <div>
                    {
                        isOpen ? <FaMinus className='text-xl text-white' /> : <FaPlus className='text-xl text-[#083860]' /> 
                    }
                    
                </div>
            </div>

            {isOpen && <div className="w-full px-6 py-3 text-[17px]">{text}</div>}
        </div>
    );
}

export default MyAccordion
