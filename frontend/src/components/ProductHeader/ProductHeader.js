import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import style from './ProductHeader.module.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import baseUrl from '../../utils/baseUrl.json';

const ProductHeader = () => {
  const [productDataHeader, setProductDataHeader] = useState({
    name: '',
    category: { name: '' },
  });
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    fetch(`${baseUrl.url}/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDataHeader(data.data))
      .catch((err) => console.log(err));
  }, [id]);

  // console.log(productDataHeader);
  // console.log(id);

  const backUrl =
    pathname === `/product/${id}/booking` ? `/products/${id}` : '/';

  return (
    <section className={style.header}>
      <div className={style.headerLeft}>
        <h4 className={style.productCategory}>
          {productDataHeader.category.name}
        </h4>
        <h1>{productDataHeader.name}</h1>
      </div>
      <div className={style.headerRight}>
        <Link to={backUrl}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
      </div>
    </section>
  );
};

export default ProductHeader;
