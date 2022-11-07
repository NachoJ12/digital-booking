import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import productsJSON from '../../utils/products.json';
import style from './ProductDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faStar,
  faLocationDot,
  faWifi,
  faCar,
} from '@fortawesome/free-solid-svg-icons';
import ImageGallery from '../ImageGallery/ImageGallery';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log('title', id);
  console.log('productState', product);

  useEffect(() => {
    {
      /* Momentaneo acá iria fetch al endpoint*/
    }
    const productFind = productsJSON.find(
      (element) => element.id.toString() === id
    );
    setProduct(productFind);
  }, [id]);

  /* SACAR ESTO */
  const [widthSize, setWithSize] = useState(window.innerWidth);

  const desktop = widthSize < 1333 ? false : true;

  useEffect(() => {
    window.addEventListener('resize', handleResize, false);
  }, []);

  console.log(widthSize);

  const handleResize = () => {
    setWithSize(window.innerWidth);
  };

  return (
    <div className={style.container}>
      <section className={style.header}>
        <div className={style.headerLeft}>
          <h4 className={style.productCategory}>{product.category}</h4>
          <h1>{product.title}</h1>
        </div>
        <div className={style.headerRight}>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
        </div>
      </section>

      <section className={style.locationScoreContainer}>
        <div className={style.locationContainer}>
          <FontAwesomeIcon icon={faLocationDot} />
          <div className={style.location}>
            <p>Buenos Aires, Ciudad Autonoma de Buenos Aires, Argentina.</p>
            <p className={style.locationDistance}>{product.location}</p>
          </div>
        </div>
        <div className={style.productScore}>
          <div>
            <p>Muy bueno</p>
            <FontAwesomeIcon className={style.productStars} icon={faStar} />
            <FontAwesomeIcon className={style.productStars} icon={faStar} />
            <FontAwesomeIcon className={style.productStars} icon={faStar} />
            <FontAwesomeIcon className={style.productStars} icon={faStar} />
            <FontAwesomeIcon className={style.productStars} icon={faStar} />
          </div>
          <span className={style.scoreNumber}>8</span>
        </div>
      </section>

      <section className={style.galleryContainer}>
        {desktop ? (
          <>
            <div className={style.imagesDesktopContainer}>
              <div className={style.bigImageContainer}>
                <img src="https://picsum.photos/id/1019/1000/600/" alt="foto" />
              </div>
              <div className={style.smallsImageContainer}>
                <img src="https://picsum.photos/id/1019/1000/600/" alt="foto" />
                <img src="https://picsum.photos/id/1019/1000/600/" alt="foto" />
              </div>
              <div className={style.smallsImageContainer2}>
                <img src="https://picsum.photos/id/1019/1000/600/" alt="foto" />
                <img src="https://picsum.photos/id/1019/1000/600/" alt="foto" />
              </div>
              <p className={style.viewMoreText}>Ver más</p>
            </div>
            {/* <ImageGallery /> */}
          </>
        ) : (
          <ImageGallery />
        )}
      </section>

      <section className={style.descriptionContainer}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </section>

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
      <section className={style.policiesContainer}>
        <h2>Qué tenés que saber</h2>
        <hr className={style.line} />
        <div className={style.policiesList}>
          <div className={style.policie}>
            <h3>Normas de la casa</h3>
            <ul>
              <li>Check-out: 10:00</li>
              <li>No se permiten fiestas</li>
              <li>No se permite fumar</li>
            </ul>
          </div>
          <div className={style.policie}>
            <h3>Salud y seguridad</h3>
            <ul>
              <li>
                Se aplican las pautas de distanciamiento social y otras normas
                relacionadas con el coronavirus.
              </li>
              <li>Detector de humo</li>
              <li>Depósito de seguridad</li>
            </ul>
          </div>
          <div className={style.policie}>
            <h3>Política de cancelación</h3>
            <ul>
              <li>
                Agregá las fechas de tu viaje para obtener los detallles de
                cancelación de esta estadía.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
