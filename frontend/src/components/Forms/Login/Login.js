import React, { useContext, useState } from 'react';
import Input from '../Input/Input';
import style from '../Form.module.css';
import users from '../../../utils/users.json';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../../context/UserContext';

const Login = () => {
  const [user, setUser] = useState({
    login_email: '',
    login_password: '',
  });
  // console.log(user);
  const userContextResult = useContext(userContext);

  const navigate = useNavigate();

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
          userContextResult.loginUser(users[0]);
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
