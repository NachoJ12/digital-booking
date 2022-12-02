import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dateRangeContext } from '../../context/DateRangeContext';
import style from './BookingDetail.module.css';
import baseUrl from '../../utils/baseUrl.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';

const BookingDetail = () => {
  const [product, setProduct] = useState([]);
  const { rangeDate } = useContext(dateRangeContext);
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log('product', product);
  // console.log('id', id);

  useEffect(() => {
    fetch(`${baseUrl.url}/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data))
      .catch((err) => console.log(err));
  }, [id]);

  function convertDateFormat(dateString) {
    return dateString.split('/').reverse().join('/');
  }

  const startDate = rangeDate[0]
    ? convertDateFormat(
        new Date(rangeDate[0]).toISOString().slice(0, 10).replace(/-/gi, '/')
      )
    : '__/__/__';
  const endDate = rangeDate[1]
    ? convertDateFormat(
        new Date(rangeDate[1]).toISOString().slice(0, 10).replace(/-/gi, '/')
      )
    : '__/__/__';

  return (
    <>
      {product.length !== 0 && (
        <div className={style.reserveDetailContainer}>
          <h2>Detalle de la reserva</h2>
          {/* Image */}
          <div className={style.cardDetailContainer}>
            <div className={style.productImageContainer}>
              <img
                className={style.productImage}
                src={product.image[0]?.url}
                alt={product.image.title}
              />
            </div>

            <div className={style.cardDetailRigth}>
              {/* title and category */}
              <div className={style.categoryTitleContainer}>
                <p className={style.productCategory}>{product.category.name}</p>
                {/* <FontAwesomeIcon className={style.productStars} icon={faStar} /> */}
                <h3 className={style.productTitle}>{product.name}</h3>
                <FontAwesomeIcon className={style.productStars} icon={faStar} />
              </div>
              {/* Adress, city, country*/}
              <div className={style.fullAddress}>
                <FontAwesomeIcon icon={faLocationDot} />
                <p>
                  {product.address}, {product.city.name},{' '}
                  {product.city.country.name}
                </p>
              </div>
              {/* Check */}
              <div className={style.containerCheck}>
                <div className={style.lineBooking}></div>
                <div className={style.checkDate}>
                  <p>Check in</p>
                  <p>{startDate}</p>
                </div>
                <div className={style.lineBooking}></div>
                <div className={style.checkDate}>
                  <p>Check out</p>
                  <p>{endDate}</p>
                </div>
                <div className={style.lineBooking}></div>
              </div>
              <button
                className="btn btn2 w-100"
                onClick={() => navigate('/booking/success')}
              >
                Confirmar reserva
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingDetail;
