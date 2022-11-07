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
import Modal from '../Modal/Modal';
import images from '../../utils/imagesGallery.json';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log('title', id);
  console.log('productState', product);

  const [stateModal, setStateModal] = useState(false);

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
                {images.slice(0, 1).map((image) => (
                  <img src={image.original} alt="foto" />
                ))}
              </div>
              <div className={style.smallsImageContainer}>
                {images.slice(1, 3).map((image) => (
                  <div>
                    <img src={image.original} alt="foto" />
                  </div>
                ))}
              </div>
              <div className={style.smallsImageContainer2}>
                {images.slice(3, 5).map((image) => (
                  <div>
                    <img src={image.original} alt="foto" />
                  </div>
                ))}
              </div>

              <button
                type="link"
                className={style.viewMoreText}
                onClick={() => setStateModal(!stateModal)}
              >
                Ver más
              </button>
            </div>
            {/* <ImageGallery /> */}
          </>
        ) : (
          <ImageGallery images={images.slice(0, 5)} />
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
      {desktop && (
        <Modal
          state={stateModal}
          changeState={setStateModal}
          showHeader={false}
          showOverlay={true}
          padding={false}
        >
          <ImageGallery images={images} />
        </Modal>
      )}
    </div>
  );
};

export default ProductDetail;
