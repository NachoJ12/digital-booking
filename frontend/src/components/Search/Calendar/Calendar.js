import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';
import es from 'date-fns/locale/es';

const Calendar = (inline) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  // setDefaultLocale('es');
  registerLocale('es', es);

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
      placeholderText="Fecha de inicio - Fecha de finalización"
      onChange={(update) => {
        setDateRange(update);
      }}
      locale="es"
      {...(inline ? inline : false)}
      //   isClearable={true}
      // fixedHeight
    />
  );
};

export default Calendar;
