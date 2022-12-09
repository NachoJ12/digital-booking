import React from 'react';
import CreateProduct from '../../components/CreateProduct/CreateProduct';
import SecondaryHeader from '../../components/SecondaryHeader/SecondaryHeader';
import style from './Administration.module.css';

const Administration = () => {
  return (
    <div className={style.container}>
      <SecondaryHeader />
      <CreateProduct />
    </div>
  );
};

export default Administration;
