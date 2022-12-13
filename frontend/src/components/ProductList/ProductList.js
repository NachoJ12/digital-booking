import React from 'react';
import Product from '../Product/Product';
import Spinner from '../Spinner/Spinner';
import style from './ProductList.module.css';

const ProductList = ({ products, isLoading }) => {
  //console.log(products);
  return (
    <div className={style.container}>
      <h2 className={style.recommendations}>Recomendaciones</h2>
      {isLoading ? (
        <div style={{ alignSelf: 'center' }}>
          <Spinner style={{ alignSelf: 'center' }} />
        </div>
      ) : (
        <>
          {products.length === 0 ? (
            <p className={style.msgNoProducts}>
              Lamentablemente no hay productos para los filtros seleccionados.
            </p>
          ) : (
            products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                imgUrl={product.image}
                category={product.category}
                title={product.name}
                description={product.description}
                location={product.city}
                address={product.address}
                attributes={product.attributes}
                latitude={product.latitude}
                longitude={product.longitude}
                policiesSite={product.policiesSite}
                policiesSecurityAndHealth={product.policiesSecurityAndHealth}
                policiesCancellation={product.policiesCancellation}
                averageScore={product.average_score}
              />
            ))
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;
