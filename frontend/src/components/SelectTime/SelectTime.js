import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import './SelectTime.css';

const SelectTime = ({ getArrivalTime }) => {
  const [startTime, setStartTime] = useState(null);
  //   const formatTime = new Date(startTime).toTimeString().slice(0, 5);

  //console.log(startTime);
  useEffect(() => {
    if (startTime !== null) {
      getArrivalTime(new Date(startTime).toTimeString());
    }
  }, [startTime, getArrivalTime]);

  // useEffect(() => {
  //   getArrivalTime(new Date(startTime).toTimeString());
  // }, [startTime, getArrivalTime]);

  return (
    <div className="selectTime">
      <DatePicker
        selected={startTime}
        onChange={(date) => setStartTime(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={60}
        timeCaption="Time"
        dateFormat="HH:mm aa"
        timeFormat="HH:mm aa"
        placeholderText="Seleccionar hora de llegada"
      />
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  );
};

export default SelectTime;
