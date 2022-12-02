import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';
import es from 'date-fns/locale/es';
import useWindowSize from '../../../hooks/useWindowSize';
import { dateRangeContext } from '../../../context/DateRangeContext';
import { useContext } from 'react';

const Calendar = ({ inline, reserved }) => {
  const { dateRangeCapture } = useContext(dateRangeContext);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  // setDefaultLocale('es');
  registerLocale('es', es);
  const { width } = useWindowSize();

  useEffect(() => {
    dateRangeCapture(dateRange);
  });

  const dateBooking = reserved?.map((booking) => {
    return {
      start: new Date(booking.check_in_date),
      end: new Date(booking.checkout_date),
    };
  });

  // console.log(dateBooking);

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
      inline={inline || false}
      //   isClearable={true}
      // fixedHeight
      // excludeDates={dateBooking}
      excludeDateIntervals={dateBooking}
    />
  );
};

export default Calendar;
