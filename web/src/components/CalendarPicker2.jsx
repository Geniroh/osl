import React, { useState } from 'react';
import dayjs from 'dayjs';
// import 'dayjs/locale/en'; // Make sure to import the locale you need

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());

  const handleStartDateChange = (e) => {
    const selectedDate = dayjs(e.target.value);
    if (!selectedDate.isAfter(dayjs(), 'day')) {
      setStartDate(selectedDate);
      setEndDate(selectedDate.isAfter(endDate) ? selectedDate : endDate);
    }
  };

  const handleEndDateChange = (e) => {
    const selectedDate = dayjs(e.target.value);
    if (!selectedDate.isBefore(startDate, 'day')) {
      setEndDate(selectedDate);
    }
  };

  return (
    <div>
      <label htmlFor="start_date">Start Date:</label>
      <input
        type="date"
        id="start_date"
        value={startDate.format('YYYY-MM-DD')}
        max={dayjs().format('YYYY-MM-DD')}
        onChange={handleStartDateChange}
      />

      <label htmlFor="end_date">End Date:</label>
      <input
        type="date"
        id="end_date"
        value={endDate.format('YYYY-MM-DD')}
        min={startDate.format('YYYY-MM-DD')}
        max={dayjs().format('YYYY-MM-DD')}
        onChange={handleEndDateChange}
      />
    </div>
  );
};

export default DateRangePicker;
