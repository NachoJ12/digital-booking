import React from 'react';
import style from './InputForm.module.css';
import visibilityIcon from '../../../assets/visibilityOff.png';

const Input = ({ label, type, id, error, onChange, isValid }) => {
  return (
    <div className={style.inputContainer}>
      <label className={style.label} htmlFor={id}>
        {label}
      </label>
      <div className={style.inputContainer2}>
        <input
          className={style.input}
          type={type}
          id={id}
          name={id}
          onChange={onChange}
          // visibility
        />
        {(id === 'login_password' || id === 'signup_password') && (
          <span
            className={style.iconVisibility}
            id="iconVisibility"
            data-activo="false"
          >
            <img
              src={visibilityIcon}
              width="24px"
              height="24px"
              alt="visibility password on/off"
            />
          </span>
        )}
      </div>
      {!isValid && <span className={style.msgError}>{error}</span>}
    </div>
  );
};

export default Input;
