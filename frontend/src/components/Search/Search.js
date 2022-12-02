import React, { useContext, useState } from 'react';
import style from './Search.module.css';
import Calendar from './Calendar/Calendar';
import SelectCity from './SelectCity/SelectCity';
import { dateRangeContext } from '../../context/DateRangeContext';

const Search = ({ handleSearch }) => {
  const [city, setCity] = useState(null);
  const { rangeDate } = useContext(dateRangeContext);

  const getCity = (valueCity) => {
    setCity(valueCity);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(city, rangeDate);
  };

  return (
    <div className={style.searchContainer}>
      <h1 className={style.searchTitle}>
        Buscar ofertas en hoteles, casas y mucho más
      </h1>
      <form className={style.searchForm} onSubmit={handleSubmit}>
        <SelectCity getCity={getCity} />
        <Calendar />
        <button className={`btn btn2 ${style.searchBtn}`}>Buscar</button>
      </form>
    </div>
  );
};

export default Search;
