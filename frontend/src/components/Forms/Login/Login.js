import React, { useContext, useState } from 'react';
import Input from '../Input/Input';
import style from '../Form.module.css';
import users from '../../../utils/users.json';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../../context/UserContext';

const Login = () => {
  const [email, setEmail] = useState({ value: '', valid: null });
  const [password, setPassword] = useState({ value: '', valid: null });
  const [isFormValid, setIsFormValid] = useState(null);

  const userContextResult = useContext(userContext);

  const navigate = useNavigate();

  const regularExpressions = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{7,20}$/, // 7 to 20 digits.
  };

  const handleSubmit = async (e) => {
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
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(users);
          if (
            users[0].email === data.email &&
            users[0].password === data.password
          ) {
            userContextResult.loginUser(users[0]);
            navigate('/');
          } else {
            setIsFormValid(false);
          }
        }, 500);
      });
    }
  };

  return (
    <div className={style.containerForms}>
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
            error="La contraseña debe tener entre 6 y 15 caracteres"
            regex={regularExpressions.password}
          />
          {isFormValid === false && (
            <p className={style.msgErrorInvalidForm}>
              Por favor vuelva a intentarlo, sus credenciales son inválidas.
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
    </div>
  );
};

export default Login;
