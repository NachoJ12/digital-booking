import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../ProductHeader/ProductHeader.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const SecondaryHeader = () => {
  return (
    <section className={style.header}>
      <div className={style.headerLeft}>
        <h1>Administración</h1>
      </div>
      <div className={style.headerRight}>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
      </div>
    </section>
  );
};

export default SecondaryHeader;
