import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../../../context/UserContext';

import Avatar from '../Avatar/Avatar';
import style from './Menu.module.css';

const Menu = () => {
  const userContextResult = useContext(userContext);

  const loggedIn = userContextResult.userJwt;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    const overlay = document.querySelector('.overlay');
    const menu = document.querySelector('#menu');
    menu.classList.toggle(style.menuOpened);
    // console.log(overlay);

    overlay.classList.toggle('visible');
  };

  return (
    <>
      <div>
        {/* Menu hamburguesa */}
        <button
          className={style.openMenu}
          onClick={toggleMenu}
          aria-label="Abrir menú de usuario"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        {/* tablet-desktop */}
        <div className={style.containerRigth}>
          {!loggedIn ? (
            <div className={style.btnGroup}>
              {pathname !== '/signup' && (
                <Link to="/signup" className="btn btn1">
                  Crear cuenta
                </Link>
              )}
              {pathname !== '/login' && (
                <Link to="/login" className="btn btn2">
                  Iniciar sesión
                </Link>
              )}
            </div>
          ) : (
            <>
              <button
                className={style.closeMenu}
                onClick={() => {
                  userContextResult.logoutUser();
                  navigate('/');
                }}
                aria-label="Cerrar sesión"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <Avatar />
            </>
          )}
        </div>
      </div>
      {/* <SideBar /> */}
    </>
  );
};

export default Menu;
