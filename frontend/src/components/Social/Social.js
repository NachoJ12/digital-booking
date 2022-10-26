import React from 'react';
import fb from '../../assets/social/facebook-v.png';
import linkedin from '../../assets/social/linkedin-v.png';
import twitter from '../../assets/social/twitter-v.png';
import instagram from '../../assets/social/instagram-v.png';
import style from './Social.module.css';

const Social = ({ activeWidth }) => {
  // console.log(activeWidth);
  return (
    <div
      className={`${style.social} ${activeWidth < 768 ? style.socialMenu : ''}`}
    >
      <a href="#a">
        <img src={fb} alt="icon facebook" />
      </a>
      <a href="#a">
        <img src={linkedin} alt="icon linkedin" />
      </a>
      <a href="#a">
        <img src={twitter} alt="icon twitter" />
      </a>
      <a href="#a">
        <img src={instagram} alt="icon instagram" />
      </a>
    </div>
  );
};

export default Social;
