import React, { useContext, useEffect, useState } from 'react'
import { BookingContext } from '../../context/BookingContext'
import { message } from 'antd'
import dayjs from 'dayjs';
import { api } from '../../api/api';
import { resources } from '../../api/resources';

const SpaceBlock = ({space, type, day}) => {
    const [selected, setSelected] = useState(false);
    const [available, setAvailable] = useState(true)

    const { appendSelectedSpace, removeSelectedSpace } = useContext(BookingContext);

    // const checkSpace = async () => {
    //     if(day) {
    //         try {
    //             const isoDate = new Date(day).toISOString();
    //             const { data } = await api.post(resources.checkSpaceUrl, {
    //                 space_id: space._id,
    //                 current_date: isoDate
    //             });
    //             setAvailable(data?.available);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // }
    
    const checkSpace = async () => {
        if(day) {
            try {
                const { data } = await api.post(resources.checkSpaceUrl, {
                    space_id: space._id,
                    current_date: day
                })
    
                setAvailable(data?.available);
            } catch (error) {
                message.error("Network Error!")
            }
        }
    }

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
        checkSpace()
    },[day])

  return (
    <>
        {
            type === 'room' ? (
                <button className={`p-[15px] cursor-pointer w-full ${selected || !available ? 'bg-[#333]' : 'bg-[#55CA7C]'} flex justify-center items-center text-white cursor-default`} onClick={handleSelect} title={space?.description} disabled={!available}>{space?.name}</button>
            ) : (
                <button className={`p-[15px] cursor-pointer ${selected || !available ? 'bg-[#333]' : 'bg-[#55CA7C]'} flex justify-center items-center text-white cursor-default`} onClick={handleSelect} title={space?.description} disabled={!available}>{space?.seat_number}</button>
            )
        }
    </>
  )
}

export default SpaceBlock



