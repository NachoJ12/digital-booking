import React from 'react';
import style from './ProductPolicies.module.css';

const ProductPolicies = () => {
  return (
    <section className={style.policiesContainer}>
      <h2>Qué tenés que saber</h2>
      <hr className={style.line} />
      <div className={style.policiesList}>
        <div className={style.policie}>
          <h3>Normas de la casa</h3>
          <ul>
            <li>Check-out: 10:00</li>
            <li>No se permiten fiestas</li>
            <li>No se permite fumar</li>
          </ul>
        </div>
        <div className={style.policie}>
          <h3>Salud y seguridad</h3>
          <ul>
            <li>
              Se aplican las pautas de distanciamiento social y otras normas
              relacionadas con el coronavirus.
            </li>
            <li>Detector de humo</li>
            <li>Depósito de seguridad</li>
          </ul>
        </div>
        <div className={style.policie}>
          <h3>Política de cancelación</h3>
          <ul>
            <li>
              Agregá las fechas de tu viaje para obtener los detallles de
              cancelación de esta estadía.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductPolicies;
