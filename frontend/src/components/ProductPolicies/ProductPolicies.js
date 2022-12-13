import React from 'react';
import style from './ProductPolicies.module.css';

const ProductPolicies = ({ policies }) => {
  return (
    <section className={style.policiesContainer}>
      <h2>Qué tenés que saber</h2>
      <hr className={style.line} />
      <div className={style.policiesList}>
        <div className={style.policie}>
          <h3>Normas del establecimiento</h3>
          <ul>
            {policies?.policiesSite?.split('. ' || '\n').map((policie, i) => (
              <li key={i}>{policie}</li>
            ))}
          </ul>
        </div>
        <div className={style.policie}>
          <h3>Salud y seguridad</h3>
          <ul>
            {policies?.policiesSecurityAndHealth
              ?.split('. ' || '\n')
              .map((policie, i) => (
                <li key={i}>{policie}</li>
              ))}
          </ul>
        </div>
        <div className={style.policie}>
          <h3>Política de cancelación</h3>
          <ul>
            {policies?.policiesCancellation
              ?.split('. ' || '\n')
              .map((policie, i) => (
                <li key={i}>{policie}</li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductPolicies;
