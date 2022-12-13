import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import style from './ProductFeatures.module.css';

const ProductFeatures = ({ attributes }) => {
  //console.log('attributes', attributes);
  return (
    <section className={style.featureListContainer}>
      <h2>¿Que ofrece este lugar?</h2>
      <hr className={style.line} />
      <div className={style.featureList}>
        {attributes?.slice(0, 8).map((attribute) => (
          <div className={style.feature} key={attribute.id}>
            <FontAwesomeIcon icon={fas[attribute?.icon]} />
            <p>{attribute.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductFeatures;
