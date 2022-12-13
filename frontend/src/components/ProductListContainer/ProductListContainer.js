import React, { useEffect, useState } from 'react';
import ProductList from '../ProductList/ProductList';
import style from './ProductListContainer.module.css';
import baseUrl from '../../utils/baseUrl.json';

const ProductListContainer = ({
  searchCity,
  searchRangeDates,
  filterCategories,
}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const startDate =
    searchRangeDates[0] &&
    new Date(searchRangeDates[0]).toISOString().slice(0, 10);

  const endDate =
    searchRangeDates[1] &&
    new Date(searchRangeDates[1]).toISOString().slice(0, 10);

  //console.log('Search', startDate, endDate);

  /* Faltaria arreglar el tema de los filtros para que se puedan reestablecer. También arreglar que si se selecciona una fecha o ciudad ya no funciona el filtro de categoria (no hay desde el back un filtro que acepte las 3 cosas) */

  const url =
    filterCategories && !(searchCity || (startDate && endDate))
      ? `${baseUrl.url}/products/category/${filterCategories}`
      : searchCity && startDate && endDate
      ? `${baseUrl.url}/products/cityAndDates/${searchCity.id}/${startDate}/${endDate}`
      : searchCity && !(startDate && endDate)
      ? `${baseUrl.url}/products/city/${searchCity.id}`
      : startDate && endDate
      ? `${baseUrl.url}/products/dates/${startDate}/${endDate}`
      : `${baseUrl.url}/products`;

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        // if (url.includes('/city')) {
        //   setProducts([]);
        //   throw new Error('No hay productos disponibles en esa ciudad');
        // }
        setProducts([]);
        setIsLoading(false);
        console.log(err);
      });
  }, [url]);

  return (
    <div className={style.container}>
      <ProductList products={products} isLoading={isLoading} />
    </div>
  );
};

export default ProductListContainer;
