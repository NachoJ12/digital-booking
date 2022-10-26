import React from 'react';
import style from './Avatar.module.css';

const name = 'Roberto';
const lastname = 'Rodriguez';

const Avatar = () => {
  return (
    <div className={style.container}>
      <div className={style.initialsContainer}>
        <span>{`${name.substring(0, 1)}${lastname.substring(0, 1)}`}</span>
      </div>
      <p>
        <span className={style.greeting}>Hola,</span>
        <br />
        {name} {lastname}
      </p>
    </div>
  );
};

export default Avatar;
