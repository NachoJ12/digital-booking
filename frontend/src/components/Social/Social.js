import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import style from './Social.module.css';

const Social = ({ activeWidth }) => {
  return (
    <div
      className={`${style.social} ${activeWidth < 768 ? style.socialMenu : ''}`}
    >
      <a href="#a">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="#a">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="#a">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="#a">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
};

export default Social;
