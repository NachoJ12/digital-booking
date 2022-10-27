import React from 'react';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <Search />
      <Categories />
    </div>
  );
};

export default Home;
