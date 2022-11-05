import React from 'react';
import productsJSON from '../../utils/products.json';
import ProductList from '../ProductList/ProductList';
import style from './ProductListContainer.module.css';

const ProductListContainer = () => {
  return (
    <div className={style.container}>
      <ProductList products={productsJSON} />
    </div>
  );
};

export default ProductListContainer;
