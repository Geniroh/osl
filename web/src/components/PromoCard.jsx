// import React from 'react'

// const PromoCard = ({ size, img, startDate, endDate, type, price, title }) => {
//   return (
//     <div className="rounded-2xl w-full bg-white shadow-2xl">
//         <img src={img} alt="" className={`${size == 'large' ? 'h-[450px]  rounded-tl-2xl rounded-tr-2xl': 'h-[250px] rounded-2xl'} w-full `} />
//         <div className='p-4 text-mydark flex flex-col gap-4'>
//             <div>
//                 <h2 className="text-2xl">{title}</h2>
//                 <h3 className='text-lg'>{startDate} - {endDate}</h3>
//             </div>

//             <div>
//                 <h3 className='text-lg'>{type} From</h3>
//                 <h3 className='text-xl'>{price}</h3>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default PromoCard

import React, { useState } from 'react';

const PromoCard = ({ size, img, startDate, endDate, type, price, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative rounded-2xl w-full bg-white shadow-2xl mb-5 ${ size == 'small' ? 'p-5' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img} alt="" className={`${size === 'large' ? 'h-[450px]  rounded-tl-2xl rounded-tr-2xl': 'h-[200px] rounded-2xl'} w-full `} />
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-mydark rounded-2xl">
            <div>

                <div className='text-white'>
                    <h2 className="text-2xl">{title}</h2>
                    <h3 className='text-lg'>{startDate} - {endDate}</h3>
                </div>
                <div className='text-white mt-5'>
                    <h3 className='text-lg'>{type} From</h3>
                    <h3 className='text-xl text-secondary'>₦{price}</h3>
                </div>
                <button className="text-mydark bg-secondary px-4 py-2 rounded-3xl text-lg mt-5 w-full">Book Now</button>
            </div>
        </div>
      )}
      <div className='p-4 text-mydark flex flex-col gap-4'>
        <div>
          <h2 className="text-2xl">{title}</h2>
          <h3 className='text-lg'>{startDate} - {endDate}</h3>
        </div>
        <div>
          <h3 className='text-lg'>{type} From</h3>
          <h3 className='text-xl'> ₦{price}</h3>
        </div>
      </div>
    </div>
  );
}

export default PromoCard;

