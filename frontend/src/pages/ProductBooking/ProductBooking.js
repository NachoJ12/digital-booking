import React, { useContext, useEffect, useState } from 'react';
import ProductHeader from '../../components/ProductHeader/ProductHeader';
import ProductPolicies from '../../components/ProductPolicies/ProductPolicies';
import BookingCheckIn from '../../components/BookingCheckIn/BookingCheckIn';
import BookingDataUser from '../../components/BookingDataUser/BookingDataUser';
import BookingDetail from '../../components/BookingDetail/BookingDetail';
import Calendar from '../../components/Search/Calendar/Calendar';
import style from './ProductBooking.module.css';
import baseUrl from '../../utils/baseUrl.json';
import { useParams } from 'react-router-dom';
import { userContext } from '../../context/UserContext';

const ProductBooking = () => {
  const [bookingDate, setBookingDate] = useState([]);
  const { id } = useParams();
  //const { userJwt } = useContext(userContext);

  const url = `${baseUrl.url}/reservations/product/${id}`;

  /* useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookingDate(data));
  }, [url]); */
  //console.log(userJwt);

  //const token = JSON.parse(userJwt);
  //console.log('token', token);
  // console.log('userJwt', userJwt);

  useEffect(() => {
    const jwt = JSON.parse(localStorage.getItem('jwt'));
    fetch(url, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBookingDate(data))
      .catch((err) => console.log(err));
  }, [url]);

  // console.log(bookingDate);

  return (
    <div className={style.container}>
      <ProductHeader />
      <div className={style.centerContainer}>
        <div className={style.leftCenterContainer}>
          {/* Completá tus datos */}
          <section>
            <h2>Completá tus datos</h2>
            <BookingDataUser />
          </section>
          <section className={style.reserveDateContainer}>
            <h2>Seleccioná tu fecha de reserva</h2>
            <div className="bookingCalendar">
              <Calendar inline={true} reserved={bookingDate} />
            </div>
          </section>
          {/* Tu horario de llegada */}
          <section>
            <h2>Tu horario de llegada</h2>
            <BookingCheckIn />
          </section>
        </div>

        {/* Detalle de la reserva */}
        <section className={style.rightCenterContainer}>
          <BookingDetail />
        </section>
      </div>
      <ProductPolicies />
    </div>
  );
};

export default ProductBooking;
