import React from 'react';
import style from './CategorieSkeleton.module.css';

const CategorieSkeleton = () => {
  return (
    <div className={style.card}>
      <div className={style.cardLoad}></div>
      <div className={style.cardLoadTitle}></div>
      <div className={style.cardLoadDescripion}></div>
    </div>
  );
};

export default CategorieSkeleton;
