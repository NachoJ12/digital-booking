import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';

const Calendar = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // console.log('widthMenu', width);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      minDate={new Date()}
      monthsShown={width < 768 ? 1 : 2}
      dateFormat="dd/MM/yyyy"
      placeholderText="Check in - Check out"
      onChange={(update) => {
        setDateRange(update);
      }}

      //   locale="es-ES"
      //   locale={'es'}
      //   isClearable={true}
    />
  );
};

export default Calendar;
