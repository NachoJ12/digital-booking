import React, { useContext } from 'react';
import { userContext } from '../../../context/UserContext';
import style from './Avatar.module.css';

const Avatar = () => {
  const userContextResult = useContext(userContext);

  const name = userContextResult.userInfo.name;
  const lastname = userContextResult.userInfo.lastName;

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
