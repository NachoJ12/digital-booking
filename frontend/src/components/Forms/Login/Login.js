import React, { useContext, useEffect, useState } from 'react';
import Input from '../Input/Input';
import style from '../Form.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../../context/UserContext';
import baseUrl from '../../../utils/baseUrl.json';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from '../../Spinner/Spinner';

const Login = () => {
  const [email, setEmail] = useState({ value: '', valid: null });
  const [password, setPassword] = useState({ value: '', valid: null });
  const [isFormValid, setIsFormValid] = useState(null);
  const [msgError, setMsgError] = useState('');
  const [isRedirect, setIsRedirect] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { userInfo, loginUser, logoutUser } = useContext(userContext);

  const navigate = useNavigate();

  const regularExpressions = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{7,25}$/, // 7 to 25 digits.
  };

  useEffect(() => {
    if (userInfo?.redirect) {
      setIsRedirect(true);
      logoutUser();
    }
  }, [userInfo?.redirect, logoutUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormValid(true);

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

    if (email.valid === 'true' && password.valid === 'true') {
      const data = {
        email: email.value,
        password: password.value,
      };
      setIsLoading(true);
      fetch(`${baseUrl.url}/authenticate`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          loginUser({ ...data, redirect: false });
          navigate('/');
        })
        .catch((err) => {
          setIsLoading(false);
          setIsFormValid(false);
          setMsgError(
            'Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde'
          );
        });
    }
  };

  return (
    <div className={`${style.containerForms} ${style.formLogin}`}>
      {isRedirect && (
        <div className={style.msgLoginBookingError}>
          <div>
            <FontAwesomeIcon icon={faCircleExclamation} />
          </div>
          <p>Para realizar una reserva necesitas estar logueado</p>
        </div>
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        <form className={style.form} onSubmit={handleSubmit}>
          <h1 className={style.titleForm}>Iniciar Sesión</h1>
          <div>
            <Input
              state={email}
              changeState={setEmail}
              label="Correo electrónico"
              type="email"
              id="email"
              name="email"
              error="Ingrese un correo electronico valido"
              regex={regularExpressions.email}
            />
            <Input
              state={password}
              changeState={setPassword}
              label="Contraseña"
              type="password"
              id="password"
              name="password"
              error="La contraseña debe tener entre 7 y 25 caracteres"
              regex={regularExpressions.password}
            />
            {isFormValid === false && (
              <p className={style.msgErrorInvalidForm}>
                {msgError
                  ? msgError
                  : 'Por favor vuelva a intentarlo, sus credenciales son inválidas.'}
              </p>
            )}

            <button type="submit" className={`btn btn2 ${style.submitButton}`}>
              Ingresar
            </button>
            <p className={style.linkContainer}>
              ¿Aún no tenés cuenta?{' '}
              <Link className={style.linkAction} to="/signup">
                Registrate
              </Link>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
