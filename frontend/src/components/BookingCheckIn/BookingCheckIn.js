import React, { useState } from 'react';
import SelectTime from '../SelectTime/SelectTime';
import style from './BookingCheckIn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

const BookingCheckIn = ({ getCheckInTime }) => {
  const [arrivalTime, setArrivalTime] = useState('--:--');

  const getArrivalTime = (time) => {
    setArrivalTime(time);
    getCheckInTime(rangeInitialTime);
  };

  const addHoursToDate = (objDate, intHours) => {
    var numberOfMlSeconds = objDate.getTime();
    var addMlSeconds = intHours * 60 * 60000;
    var newDateObj = new Date(numberOfMlSeconds + addMlSeconds);

    return newDateObj;
  };

  //   const formatTime = new Date(startTime).toTimeString().slice(0, 5);
  const rangeInitialTime = arrivalTime.slice(0, 5);

  const rangeFinishTime =
    arrivalTime !== '--:--'
      ? addHoursToDate(new Date(2022, 0, 1, arrivalTime.slice(0, 2), 0, 0), 1)
          .toTimeString()
          .slice(0, 5)
      : '--:--';

  return (
    <div className={style.checkInContainer}>
      <div className={style.checkInText}>
        <FontAwesomeIcon icon={faCircleCheck} />
        <p>
          Tu habitación va a estar lista para el check-in entre las{' '}
          {rangeInitialTime}{' '}
          {Number(rangeInitialTime.slice(0, 2)) < 12 ? 'AM' : 'PM'} y las{' '}
          {rangeFinishTime}{' '}
          {Number(rangeFinishTime.slice(0, 2)) < 12 ? 'AM' : 'PM'}
        </p>
      </div>
      <div className={style.checkInTime}>
        <p>Indicá tu horario estimado de llegada</p>
        <div className={style.selectTimeContainer}>
          <SelectTime getArrivalTime={getArrivalTime} />
        </div>
      </div>
    </div>
  );
};

export default BookingCheckIn;
