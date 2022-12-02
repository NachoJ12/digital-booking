import React from 'react';
import style from './ProductDescription.module.css';

const ProductDescription = ({ name, description }) => {
  return (
    <section className={style.descriptionContainer}>
      <h2>{name}</h2>
      <p>{description}</p>
    </section>
  );
};

export default ProductDescription;
