import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.svg';
import style from './Header.module.css';
import Menu from './Menu/Menu';

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.containerLeft}>
          <Link to="/" aria-label="Página de inicio de Digital Booking">
            <img src={logo} alt="logo" />
          </Link>
          <span className={style.motto}>Sentite como en tu hogar</span>
        </div>
        <Menu />
      </nav>
    </header>
  );
};

export default Header;
