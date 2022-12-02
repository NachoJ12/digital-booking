import React, { useContext, useState } from 'react';
import { userContext } from '../../context/UserContext';
import Input from '../Forms/Input/Input';
import style from './BookingDataUser.module.css';

const BookingDataUser = () => {
  const { userJwt, userInfo } = useContext(userContext);
  const [name, setName] = useState({
    value: userInfo.name,
    valid: 'true',
  });

  const [lastName, setLastName] = useState({
    value: userInfo.lastName,
    valid: 'true',
  });

  const [email, setEmail] = useState({
    value: userInfo.email,
    valid: 'true',
  });

  return (
    <div className={style.dataUserContainer}>
      <div className={style.inputGroup}>
        <Input
          state={name}
          label="Nombre"
          type="text"
          id="name"
          name="name"
          readonly
        />
        <Input
          state={lastName}
          label="Apellido"
          type="text"
          id="lastName"
          name="lastName"
          readonly
        />
      </div>
      <Input
        state={email}
        label="Correo electrónico"
        type="email"
        id="email"
        name="email"
        readonly
      />
    </div>
  );
};

export default BookingDataUser;
