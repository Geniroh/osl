import React from 'react'

const IconCard = ({icon, heading, text}) => {
  return (
    <div className='w-full rounded-2xl hover:scale-105 shadow-md h-[100px] md:h-[160px] flex items-center gap-3 transition-all duration-500 cursor-pointer border p-4 bg-white'>
        <div className='text-4xl md:text-6xl font-thin'>
            {icon}
        </div>
        <div>
            <h2 className='text-lg md:text-xl font-semibold'>{heading}</h2>
            <p className='leading-5 text-md font-light'>{text}</p>
        </div>
    </div>
  )
}

export default IconCard