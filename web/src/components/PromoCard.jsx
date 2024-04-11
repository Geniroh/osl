import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookingContext } from '../context/BookingContext';

const PromoCard = ({ size, img, startDate, endDate, type, price, title, pcode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { setPromoDetails } = useContext(BookingContext)

  const navigate = useNavigate()

  const handlePromoSelection = () => {
    setPromoDetails(prev => ({
      ...prev,
      pcode: pcode,
      promoType: type
    }));

    navigate("/promo")
  }

  return (
    <div 
      className={`relative rounded-2xl w-full bg-white shadow-2xl mb-5 md:mb-0 ${ size == 'small' ? 'p-3' : 'md:h-full'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img} alt="" className={`${size === 'large' ? 'h-[250px] md:h-[450px]  rounded-tl-2xl rounded-tr-2xl': 'h-[140px] rounded-lg'} w-full `} />
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-mydark rounded-2xl px-3">
            <div>
                <div className='text-white'>
                    <h2 className="text-lg sm:text-2xl">{title}</h2>
                    <h3 className='text-[16px] sm:text-lg'>{startDate} - {endDate}</h3>
                </div>
                <div className='text-white mt-5'>
                    <h3 className='text-[18px] sm:text-lg'>{type} From</h3>
                    <h3 className='text-[14px] sm:text-xl text-secondary'>₦{price}</h3>
                </div>
                <button className="text-mydark bg-secondary px-4 py-2 rounded-3xl text-lg mt-5 w-full" onClick={handlePromoSelection}>Book Now</button>
            </div>
        </div>
      )}
      <div className='p-4 text-mydark flex flex-col gap-4'>
        <div>
          <h2 className={`${size === 'large' ? 'text-xl' : 'text-[18px]'} font-semibold`}>{title}</h2>
          <h3 className={`${size === 'large' ? 'text-md' : 'text-[14px]'}`}>{startDate} - {endDate}</h3>
        </div>
        <div>
          <h3  className={`${size === 'large' ? 'text-xl' : 'text-[16px]'} font-semibold`}>{type} From</h3>
          <h3 className={`${size === 'large' ? 'text-md' : 'text-[14px]'}`}> ₦{price}</h3>
        </div>
      </div>
    </div>
  );
}

export default PromoCard;

