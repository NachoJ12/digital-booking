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
          imgUrl={product.image}
          category={product.category}
          title={product.name}
          description={product.description}
          location={product.city}
        />
      ))}
    </div>
  );
};

export default ProductList;
