import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Product.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-solid-svg-icons';
import {
  faStar,
  faHeart,
  faLocationDot,
  faPersonSwimming,
  faWifi,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

const Product = ({ imgUrl, category, title, description, location }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddFavorite = () => {
    isFavorite ? setIsFavorite(false) : setIsFavorite(true);
  };

  return (
    <div className={style.cardContainer}>
      <div className={style.productImageContainer}>
        <FontAwesomeIcon
          onClick={handleAddFavorite}
          className={style.productFavorite}
          icon={!isFavorite ? faHeartRegular : faHeart}
        />
        <img className={style.productImage} src={imgUrl} alt={title} />
      </div>
      <div className={style.cardDetails}>
        <div className={style.row1}>
          <div className={style.productInitialContainer}>
            <div className={style.productCategoryContainer}>
              <p className={style.productCategory}>{category}</p>
              <FontAwesomeIcon className={style.productStars} icon={faStar} />
            </div>
            <h5 className={style.productTitle}>{title}</h5>
          </div>

          <div className={style.productScore}>
            <span className={style.scoreNumber}>8</span>
            <p className={style.scoreText}>Muy bueno</p>
          </div>
        </div>

        <div className={style.productInformation}>
          <p className={style.productLocation}>
            <FontAwesomeIcon icon={faLocationDot} /> {location} -{' '}
            <Link className={style.linkLocation} href="#a">
              Mostrar en el mapa
            </Link>{' '}
          </p>
          <div className={style.propertyHighlights}>
            <FontAwesomeIcon icon={faPersonSwimming} />
            <FontAwesomeIcon icon={faWifi} />
          </div>
        </div>

        <p className={style.productDescription}>{description}</p>
        <button className={`btn btn2 w-100`}>Ver detalle</button>
      </div>
    </div>
  );
};

export default Product;
