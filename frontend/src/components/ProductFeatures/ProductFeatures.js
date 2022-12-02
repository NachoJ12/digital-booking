import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faCar } from '@fortawesome/free-solid-svg-icons';
import style from './ProductFeatures.module.css';

const ProductFeatures = () => {
  return (
    <section className={style.featureListContainer}>
      <h2>¿Que ofrece este lugar?</h2>
      <hr className={style.line} />
      <div className={style.featureList}>
        <div className={style.feature}>
          <FontAwesomeIcon icon={faCar} />
          <p>Estacionamiento gratuito</p>
        </div>
        <div className={style.feature}>
          <FontAwesomeIcon icon={faWifi} />
          <p>Wifi</p>
        </div>
        <div className={style.feature}>
          <FontAwesomeIcon icon={faWifi} />
          <p>Wifi</p>
        </div>
        <div className={style.feature}>
          <FontAwesomeIcon icon={faWifi} />
          <p>Wifi</p>
        </div>
        <div className={style.feature}>
          <FontAwesomeIcon icon={faWifi} />
          <p>Wifi</p>
        </div>
        <div className={style.feature}>
          <FontAwesomeIcon icon={faWifi} />
          <p>Wifi</p>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
