import React, { useState } from 'react';
import Input from '../Input/Input';
import style from '../Form.module.css';

import { Link } from 'react-router-dom';

const SignUp = () => {
  const [userData, setUserData] = useState({
    signup_name: '',
    signup_lastName: '',
    signup_email: '',
    signup_password: '',
  });

  // console.log(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*codigo submit*/
  };

  return (
    <div className={style.containerForms}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.titleForm}>Crear cuenta</h1>
        <div>
          <div className={style.inputGroup}>
            <Input
              label="Nombre"
              type="text"
              id="signup_name"
              error=""
              onChange={handleChange}
              isValid={true}
            />
            <Input
              label="Apellido"
              type="text"
              id="signup_lastName"
              error=""
              onChange={handleChange}
              isValid={true}
            />
          </div>

          <Input
            label="Correo electrónico"
            type="email"
            id="signup_email"
            error="Correo electrónico incorrecto"
            onChange={handleChange}
            isValid={false}
          />
          <Input
            label="Contraseña"
            type="password"
            id="signup_password"
            error="Contraseña incorrecta"
            onChange={handleChange}
            isValid={true}
          />
          <Input
            label="Confirmar contraseña"
            type="password"
            id="signup_repeatPassword"
            error="La contraseña no coincide"
            onChange={handleChange}
            isValid={true}
          />

          <button type="submit" className={`btn btn2 ${style.submitButton}`}>
            Crear cuenta
          </button>
          <p className={style.linkContainer}>
            ¿Ya tienes una cuenta?{' '}
            <Link className={style.linkAction} to="/login">
              Iniciar sesión
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
