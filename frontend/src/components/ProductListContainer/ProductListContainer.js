import React, { useEffect, useState } from 'react';
import ProductList from '../ProductList/ProductList';
import style from './ProductListContainer.module.css';
import baseUrl from '../../utils/baseUrl.json';

const ProductListContainer = ({ searchCity, searchRangeDates }) => {
  const [products, setProducts] = useState([]);

  const startDate =
    searchRangeDates[0] &&
    new Date(searchRangeDates[0]).toISOString().slice(0, 10);

  const endDate =
    searchRangeDates[1] &&
    new Date(searchRangeDates[1]).toISOString().slice(0, 10);

  //console.log('Search', startDate, endDate);

  const url =
    searchCity && startDate && endDate
      ? `${baseUrl.url}/products/cityAndDates/${searchCity.id}/${startDate}/${endDate}`
      : searchCity && !(startDate && endDate)
      ? `${baseUrl.url}/products/city/${searchCity.id}`
      : startDate && endDate
      ? `${baseUrl.url}/products/dates/${startDate}/${endDate}`
      : `${baseUrl.url}/products`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        if (url.includes('/city')) {
          throw new Error('No hay productos disponibles en esa ciudad');
        }
        console.log(err);
      });
  }, [url]);

  return (
    <div className={style.container}>
      <ProductList products={products} />
    </div>
  );
};

export default ProductListContainer;
