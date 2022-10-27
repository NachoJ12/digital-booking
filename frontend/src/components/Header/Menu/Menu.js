import React from 'react';
import { Link } from 'react-router-dom';
import hamburguer from '../../../assets/menu.svg';

import Avatar from '../Avatar/Avatar';
import style from './Menu.module.css';

const Menu = () => {
  let logeado = Boolean(localStorage.getItem('login'));
  console.log(logeado);

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
          aria-label="Abrir menú"
        >
          <span title="Abrir menú hamburguesa" aria-hidden="true">
            <img src={hamburguer} alt="menu" />
          </span>
        </button>
        {/* tablet-desktop */}
        <div className={style.containerRigth}>
          {!logeado ? (
            <div className={style.btnGroup}>
              <Link to="/signup" className="btn btn1">
                Crear cuenta
              </Link>
              <Link to="/login" className="btn btn2">
                Iniciar sesión
              </Link>
            </div>
          ) : (
            <>
              <button
                className={style.closeMenu}
                onClick={() => {
                  localStorage.removeItem('login');
                }}
                aria-label="Cerrar sesión"
              >
                <span title="Cerrar sesión" aria-hidden="true">
                  X
                </span>
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
