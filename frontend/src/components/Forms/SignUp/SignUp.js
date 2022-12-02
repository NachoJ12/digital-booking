import React, { useState } from 'react';
import Input from '../Input/Input';
import style from '../Form.module.css';

import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState({ value: '', valid: null });
  const [lastName, setLastName] = useState({ value: '', valid: null });
  const [email, setEmail] = useState({ value: '', valid: null });
  const [password, setPassword] = useState({ value: '', valid: null });
  const [password2, setPassword2] = useState({ value: '', valid: null });

  const regularExpressions = {
    nameAndLastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letters and spaces can carry accents.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{7,25}$/, // 7 to 25 digits.
  };

  const validateRepeatPassword = () => {
    if (password.value.length > 0) {
      if (password.value !== password2.value) {
        setPassword2((prevState) => {
          return { ...prevState, valid: 'false' };
        });
      } else if (password.valid === 'false') {
        setPassword2((prevState) => {
          return { ...prevState, valid: 'false' };
        });
      } else {
        setPassword2((prevState) => {
          return { ...prevState, valid: 'true' };
        });
      }
    } else if (password.value === '') {
      setPassword2((prevState) => {
        return { ...prevState, valid: 'false' };
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.value === '') {
      setName((prevState) => {
        return { ...prevState, valid: 'false' };
      });
    }
    if (lastName.value === '') {
      setLastName((prevState) => {
        return { ...prevState, valid: 'false' };
      });
    }
    if (email.value === '') {
      setEmail((prevState) => {
        return { ...prevState, valid: 'false' };
      });
    }
    if (password.value === '') {
      setPassword((prevState) => {
        return { ...prevState, valid: 'false' };
      });
    }
    if (password2.value === '') {
      setPassword2((prevState) => {
        return { ...prevState, valid: 'false' };
      });
    }

    /*codigo submit*/
  };

  return (
    <div className={style.containerForms}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.titleForm}>Crear cuenta</h1>
        <div>
          <div className={style.inputGroup}>
            <Input
              state={name}
              changeState={setName}
              label="Nombre"
              type="text"
              id="name"
              name="name"
              error="Sólo están permitidas letras y espacios"
              regex={regularExpressions.nameAndLastName}
            />
            <Input
              state={lastName}
              changeState={setLastName}
              label="Apellido"
              type="text"
              id="lastName"
              name="lastName"
              error="Sólo están permitidas letras y espacios"
              regex={regularExpressions.nameAndLastName}
            />
          </div>

          <Input
            state={email}
            changeState={setEmail}
            label="Correo electrónico"
            type="email"
            id="email"
            name="email"
            error="Correo electrónico incorrecto"
            regex={regularExpressions.email}
          />
          <Input
            state={password}
            changeState={setPassword}
            label="Contraseña"
            type="password"
            id="password"
            name="password"
            error="La contraseña debe tener entre 6 y 15 caracteres"
            regex={regularExpressions.password}
          />
          <Input
            state={password2}
            changeState={setPassword2}
            label="Confirmar contraseña"
            type="password"
            id="password2"
            name="password2"
            error="Las contraseñas deben ser iguales"
            // regex={regularExpressions.password}
            executeFunction={validateRepeatPassword}
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
