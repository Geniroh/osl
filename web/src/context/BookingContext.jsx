import React, { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [spaceType, setSpaceType] = useState('single_spot');
    const [selectedSpaces, setSelectedSpaces] = useState([]);

    const appendSelectedSpace = (space) => {
        const exists = selectedSpaces.includes(space)
        console.log({exists, space})
        // space.push(day)
        if(!exists) {
            setSelectedSpaces(prev => [...prev, space]);
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
        appendSelectedSpace
    };

    return (
        <BookingContext.Provider value={contextValues}>
            {children}
        </BookingContext.Provider>
    );
};
