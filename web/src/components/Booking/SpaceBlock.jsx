import React, { useContext, useEffect, useState } from 'react'
import { BookingContext } from '../../context/BookingContext'
import { message } from 'antd'
import dayjs from 'dayjs';

const SpaceBlock = ({space, type, day}) => {
    const [selected, setSelected] = useState(false);

    const { appendSelectedSpace, removeSelectedSpace } = useContext(BookingContext);

    const handleSelect = () => {
        setSelected(!selected)
        if(!selected) {
            appendSelectedSpace({...space, day})
            const msg = type == 'room' ? `${space?.name} selected for ${dayjs(day).format('MMMM D, YYYY')}` : `Seat ${space?.seat_number} selected for ${dayjs(day).format('MMMM D, YYYY')}`
            message.success(msg)
        } else {
            removeSelectedSpace(space._id)
            const msg = type == 'room' ? `${space?.name} unselected for ${dayjs(day).format('MMMM D, YYYY')}` : `Seat ${space?.seat_number} unselected for ${dayjs(day).format('MMMM D, YYYY')}`
            message.info(msg)
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