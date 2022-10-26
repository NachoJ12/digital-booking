import React, { useState } from 'react';
import Input from '../Input/Input';
import style from '../Form.module.css';
import users from '../../../utils/users.json';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    login_email: '',
    login_password: '',
  });
  // console.log(user);

  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState(localStorage.getItem('login'));

  const loginUser = () => {
    setUserLogin(true);
    localStorage.setItem('login', true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.login_email === '') {
      return;
    }

    const data = {
      email: user.login_email,
      password: user.login_password,
    };
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(users);
        if (
          users[0].email === data.email &&
          users[0].password === data.password
        ) {
          loginUser();
          navigate('/');
        } else {
          console.log('false');
        }
      }, 500);
    });
  };

  return (
    <div className={style.containerForms}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.titleForm}>Iniciar Sesión</h1>
        <div>
          <Input
            label="Correo electrónico"
            type="email"
            id="login_email"
            error="Correo electrónico incorrecto"
            onChange={handleChange}
            isValid={false}
          />
          <Input
            label="Contraseña"
            type="password"
            id="login_password"
            error="Contraseña incorrecta"
            onChange={handleChange}
            isValid={true}
          />
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

/* 

Login: Crear un formulario de inicio de sesión que contenga los siguientes inputs y labels:

Correo electrónico (de type=”email”)
Contraseña (de type=”Password”)
Además debe tener un botón que debe decir ingresar.
Debajo del botón debe haber un texto que redireccione al registro.
*/
