import React, { useContext, useEffect, useState } from 'react'
import { BookingContext } from '../../context/BookingContext'

const SpaceBlock = ({space, type, day}) => {
    const [selected, setSelected] = useState(false);

    const { appendSelectedSpace } = useContext(BookingContext);

    const handleSelect = () => {
        setSelected(!selected)
        if(!selected) {
            console.log({space, day})
            appendSelectedSpace({...space, day})
        }
    }

    useEffect(() => {
        
    },[])

  return (
    <>
        {
            type === 'room' ? (
                <span className={`p-[15px] cursor-pointer ${selected ? 'bg-[#333]' : 'bg-[#55CA7C]'} flex justify-center items-center text-white cursor-default`} onClick={handleSelect} title={space?.description}>{space?.name}</span>
            ) : (
                <span className={`p-[15px] cursor-pointer ${selected ? 'bg-[#333]' : 'bg-[#55CA7C]'} flex justify-center items-center text-white cursor-default`} onClick={handleSelect} title={space?.description} >{space?.seat_number}</span>
            )
        }
    </>
  )
}

export default SpaceBlock