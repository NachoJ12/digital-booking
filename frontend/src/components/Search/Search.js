import React, { useState } from 'react';
import style from './Search.module.css';
import cities from '../../utils/cities.json';
import Calendar from './Calendar/Calendar';

const Search = () => {
  const [selectSearch, setSelectSearch] = useState('');

  const handleChange = (e) => {
    setSelectSearch(e.target.value);
  };

  return (
    <div className={style.searchContainer}>
      <h1 className={style.searchTitle}>
        Buscar ofertas en hoteles, casas y mucho más
      </h1>
      <form className={style.searchForm}>
        <select
          className={style.selectCity}
          name="select"
          value={selectSearch}
          // defaultValue={'default'}
          required
          onChange={handleChange}
        >
          <option value="" disabled hidden>
            ¿A dónde vamos?
          </option>
          {cities.map((city) => {
            return (
              <option key={city.id} value={city.id}>
                {city.ciudad}, {city.pais}
              </option>
            );
          })}
        </select>
        <Calendar />
        <button className={`btn btn2 ${style.searchBtn}`}>Buscar</button>
      </form>
    </div>
  );
};

export default Search;
