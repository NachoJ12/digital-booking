import React, { useState } from 'react';
import Categories from '../Categories/Categories';
import ProductListContainer from '../ProductListContainer/ProductListContainer';
import Search from '../Search/Search';
import style from './Home.module.css';

const Home = () => {
  const [searchCity, setSearchCity] = useState(null);
  const [searchRangeDates, setSearchRangeDates] = useState([null, null]);

  const handleSearch = (citySearch, dateRange) => {
    setSearchCity(citySearch);
    setSearchRangeDates(dateRange);
  };

  return (
    <div className={style.homeContainer}>
      <Search handleSearch={handleSearch} />
      <Categories />
      <ProductListContainer
        searchCity={searchCity}
        searchRangeDates={searchRangeDates}
      />
    </div>
  );
};

export default Home;
