import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={style.container}>
      <FontAwesomeIcon icon={faCircleQuestion} />
      <h2>Parece que esta página no existe</h2>
      <Link to="/">Ir a la página principal</Link>
    </div>
  );
};

export default NotFound;
