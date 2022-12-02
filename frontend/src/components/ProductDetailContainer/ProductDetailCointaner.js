import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../ProductDetail/ProductDetail';
import baseUrl from '../../utils/baseUrl.json';

const ProductDetailCointaner = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`${baseUrl.url}/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <>{/* insertar spinner/skeleton */}</>
      ) : (
        <ProductDetail {...product} />
      )}
    </>
  );
};

export default ProductDetailCointaner;
