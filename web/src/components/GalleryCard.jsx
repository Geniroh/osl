import React from 'react'

const GalleryCard = ({img, text}) => {
  return (
    <div 
        style={{ backgroundImage: `url(${img})`}}
        className='border w-full h-[350px] flex items-end justify-end hover:scale-105 cursor-pointer transition-all duration-1000 shadow-lg bg-no-repeat bg-cover object-cover'
    >
        <p className='p-5 text-[16px]'>{text || ""}</p>
    </div>
  )
}

export default GalleryCard