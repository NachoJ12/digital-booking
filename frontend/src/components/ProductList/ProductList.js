import React from 'react';
import Product from '../Product/Product';
import style from './ProductList.module.css';

const ProductList = ({ products }) => {
  return (
    <div className={style.container}>
      <h2 className={style.recommendations}>Recomendaciones</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          imgUrl={product.img}
          category={product.category}
          title={product.title}
          description={product.description}
          location={product.location}
        />
      ))}
    </div>
  );
};

export default ProductList;
