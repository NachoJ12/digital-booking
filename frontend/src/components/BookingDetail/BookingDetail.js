import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dateRangeContext } from '../../context/DateRangeContext';
import style from './BookingDetail.module.css';
import baseUrl from '../../utils/baseUrl.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../../context/UserContext';

const BookingDetail = ({ checkInTime }) => {
  const [product, setProduct] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const { rangeDate } = useContext(dateRangeContext);
  const { id } = useParams();
  const { userInfo } = useContext(userContext);
  const navigate = useNavigate();
  // console.log('product', product);
  // console.log('id', id);

  //console.log('checkinTime', checkInTime);

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

  useEffect(() => {
    if (
      rangeDate[0] !== null &&
      rangeDate[1] !== null &&
      checkInTime !== null
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [rangeDate, checkInTime]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = {
      arrival_time: checkInTime + ':00', // format = 10:00:00
      check_in_date: rangeDate[0].toISOString().slice(0, 10), // format = aaaa-mm-dd (2023-11-24)
      checkout_date: rangeDate[1].toISOString().slice(0, 10),
      comments: '',
      product: {
        id: Number(id),
      },
      user: {
        id: userInfo.id,
      },
    };
    //console.log(newBooking);

    if (
      rangeDate[0] !== null &&
      rangeDate[1] !== null &&
      checkInTime !== null
    ) {
      const jwt = JSON.parse(localStorage.getItem('jwt'));
      fetch(`${baseUrl.url}/reservations/create`, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(newBooking),
      })
        .then((response) => response.json())
        .then((data) => console.log('New booking: ', data));
    }

    navigate('/booking/success');
  };

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
              {/* Address, city, country*/}
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
                disabled={isDisabled}
                className="btn btn2 w-100"
                onClick={handleSubmit}
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
