import React, { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [spaceType, setSpaceType] = useState('single_spot');
    const [selectedSpaces, setSelectedSpaces] = useState([]);
    const [spaceForReservation, setSpaceForReservation] = useState([])

    const appendSelectedSpace = (space) => {
        const exists = selectedSpaces.includes(space)
        // console.log(selectedSpaces)
        if(!exists) {
            setSelectedSpaces(prev => [...prev, {space_id: space._id, current_date: space.day }]);
        }
    };

    const removeSelectedSpace = (spaceId) => {
        const spaceExists = selectedSpaces.some(selectedSpace => selectedSpace.space_id === spaceId);
        if (spaceExists) {
            setSelectedSpaces(prev => prev.filter(selectedSpace => selectedSpace.space_id !== spaceId));
        }
    };

    const contextValues = {
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        spaceType,
        setSpaceType,
        selectedSpaces,
        setSelectedSpaces,
        appendSelectedSpace,
        removeSelectedSpace,
        spaceForReservation,
        setSpaceForReservation,
    };

    return (
        <BookingContext.Provider value={contextValues}>
            {children}
        </BookingContext.Provider>
    );
};