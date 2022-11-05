import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../context/UserContext';
import Avatar from '../Header/Avatar/Avatar';
import style from '../Header/Menu/Menu.module.css';
import Social from '../Social/Social';

const SideBar = () => {
  const userContextResult = useContext(userContext);

  const loggedIn = userContextResult.userLogin;

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // console.log('widthMenu', width);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const toggleMenu = () => {
    const overlay = document.querySelector('.overlay');
    const menu = document.querySelector('#menu');
    menu.classList.toggle(style.menuOpened);
    // console.log(overlay);

    overlay.classList.toggle('visible');
  };

  return (
    <>
      {' '}
      {/* Despliegue de sidebar */}
      <div className={style.menu} id="menu">
        {/* Menu top */}
        <div className={`${style.menuTop} ${!loggedIn ? '' : style.loggedIn}`}>
          <button
            className={style.closeMenu}
            onClick={toggleMenu}
            aria-label="Cerrar menú"
          >
            <span title="Cerrar menú hamburguesa" aria-hidden="true">
              X
            </span>
          </button>
          {!loggedIn ? (
            <>
              <p className={style.menuTitle}>menú</p>{' '}
            </>
          ) : (
            <Avatar />
          )}
        </div>
        {/* Menu Body */}
        <div className={style.menuBody}>
          {!loggedIn && (
            <ul>
              <li>
                <Link to="/signup">Crear cuenta</Link>
              </li>
              <span className={style.lineOrange}></span>
              <li>
                <Link to="/login">Iniciar sesión</Link>
              </li>
            </ul>
          )}
        </div>
        {/* Menu Fotter */}
        <div className={style.menuFooter}>
          {loggedIn && (
            <>
              <p>
                ¿Deseas{' '}
                <Link
                  className={style.signOff}
                  onClick={() => userContextResult.logoutUser()}
                >
                  cerrar sesión
                </Link>
                ?
              </p>
              <span className={style.lineOrange}></span>
            </>
          )}

          <Social activeWidth={width} />
        </div>
      </div>
    </>
  );
};

export default SideBar;
