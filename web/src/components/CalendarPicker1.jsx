import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";

import React from 'react'

const CalendarPicker1 = () => {
  return (
    <Flatpickr 
        options={{
            // inline: true,
        mode: "range",
        dateFormat: "Y-m-d",
        }}
    />
  )
}

export default CalendarPicker1

// import "flatpickr/dist/themes/material_green.css";
// import Flatpickr from "react-flatpickr";
// import React from 'react';

// const CalendarPicker = () => {
//   return (
//     <div className="form-grp date">
//       <ul>
//         <li>
//           <label htmlFor="start_date">Start Date</label>
//           <Flatpickr
//             id="start_date"
//             className="date"
//             options={{
//               dateFormat: "Y-m-d",
//             }}
//           />
//         </li>
//         <li>
//           <label htmlFor="end_date">End Date</label>
//           <Flatpickr
//             id="end_date"
//             className="date"
//             options={{
//               dateFormat: "Y-m-d",
//             }}
//           />
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default CalendarPicker;

// import "flatpickr/dist/themes/material_green.css";
// import Flatpickr from "react-flatpickr";
// import { useState } from 'react';
// import { format } from 'date-fns';

// const CalendarPicker = () => {
//   const [startDate, setStartDate] = useState(null);

//   const handleStartDateChange = (selectedDates) => {
//     const newStartDate = selectedDates[0];
//     const newEndDate = startDate ? (newStartDate > startDate ? newStartDate : null) : null;
//     setStartDate(newStartDate);
//     setEndDate(newEndDate);
//   };

//   const setEndDate = (endDate) => {
//     const endDatePicker = document.getElementById('end_date');
//     endDatePicker._flatpickr.setDate(endDate, true);
//   };

//   return (
//     <div className="form-grp date">
//       <ul>
//         <li>
//           <label htmlFor="start_date">Start Date</label>
//           <Flatpickr
//             id="start_date"
//             className="date"
//             options={{
//               dateFormat: "Y-m-d",
//               minDate: "today",
//               onChange: handleStartDateChange
//             }}
//           />
//         </li>
//         <li>
//           <label htmlFor="end_date">End Date</label>
//           <Flatpickr
//             id="end_date"
//             className="date"
//             options={{
//               dateFormat: "Y-m-d",
//               minDate: startDate ? format(startDate, 'yyyy-MM-dd') : "today",
//             }}
//           />
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default CalendarPicker;

