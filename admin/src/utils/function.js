import dayjs from "dayjs"; 

const formatDate= (date) => {
    return dayjs(date).format('YYYY-MM-DD');
}

export const separateDates = (datesArray) => {
    if (datesArray.length !== 2) {
        if (datesArray.length === 1) {
            const date = formatDate(datesArray[0]);
            return { startDate: date, endDate: date };
        } else {
            throw new Error('Invalid dates array. It should contain exactly 2 dates.');
        }
    }

    const [firstDate, secondDate] = datesArray;

    const startDate = formatDate(firstDate);
    const endDate = formatDate(secondDate);

    return { startDate, endDate };
}

export const validateEmail = (rule, value, callback) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!value || value.match(emailRegex)) {
      callback();
    } else {
      callback('Please enter a valid email address');
    }
};

export const validatePhoneNumber = (rule, value, callback) => {
    const phoneRegex = /^(?:\+?234)?(?:0)?([7-9][0-9]{9})$/;

    if (!value || value.match(phoneRegex)) {
      callback();
    } else {
      callback('Please enter a valid phone number');
    }
};

export const calculateDaysWithDatesArray = (start_date, end_date) => {
  const startDateObj = dayjs(start_date);
  const endDateObj = dayjs(end_date);

  if (!startDateObj.isValid() || !endDateObj.isValid()) {
      throw new Error('Invalid date format');
  }

  if (startDateObj.isSame(endDateObj, 'day')) {
      return [startDateObj.toDate()];
  }

  const days = [];
  let currentDate = startDateObj;

  while (currentDate <= endDateObj.add(1, 'day')) {
      days.push(currentDate.toDate());
      currentDate = currentDate.add(1, 'day');
  }

  return days;
};

export const formatNumber = (number) => {
  return Number(number).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
};

export const calculateDays = (start_date, end_date) => {
  if (!(start_date instanceof Date)) {
      start_date = new Date(start_date);
  }
  if (!(end_date instanceof Date)) {
      end_date = new Date(end_date);
  }

  const timeDiff = end_date - start_date;
  const days = Math.ceil(timeDiff / (1000 * 3600 * 24));

  if(days === 0){
      return 1
  } else {
      return days + 1;
  }
};




// export const checkSelectedSpaces = (selectedDays, selectedSpaces) => {
//   selectedDays.forEach(day => {
//       const spaceFound = selectedSpaces.some(space => {
//           // Assuming createdAt is the date associated with the space
//           const spaceDate = new Date(space.day);
//           return spaceDate.toDateString() === day.toDateString();
//       });
//       if (!spaceFound) {
//           throw new Error(`Please select a space for ${day.toDateString()}`);
//       }
//   });
//   console.log('All days have at least one selected space.');
// };





