import { createContext, useState } from 'react';

export const dateRangeContext = createContext();

const Provider = dateRangeContext.Provider;

const DateRangeProvider = (props) => {
  const [rangeDate, setRangeDate] = useState([null, null]);

  const dateRangeCapture = (range) => {
    setRangeDate(range);
  };

  return (
    <Provider value={{ rangeDate, dateRangeCapture }}>
      {props.children}
    </Provider>
  );
};

export default DateRangeProvider;
