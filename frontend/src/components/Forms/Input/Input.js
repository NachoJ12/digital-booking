import React, { useState } from 'react';
import style from './InputForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Input = ({
  state,
  changeState,
  label,
  type,
  id,
  name,
  error,
  placeholder,
  regex,
  executeFunction,
  readonly,
}) => {
  const [viewPassword, setViewPassword] = useState(false);
  const [changeType, setChangeType] = useState(null);

  const toggleViewPassword = () => {
    !viewPassword ? setViewPassword(true) : setViewPassword(false);
    !changeType === 'password'
      ? setChangeType('text')
      : setChangeType('password');
  };

  const onChange = (e) => {
    changeState({ ...state, value: e.target.value });
  };

  const validation = () => {
    if (regex) {
      if (regex.test(state.value)) {
        changeState({ ...state, valid: 'true' });
      } else {
        changeState({ ...state, valid: 'false' });
      }
    }

    if (executeFunction) {
      executeFunction();
    }
  };

  return (
    <div className={style.inputContainer}>
      <label className={style.label} htmlFor={name}>
        {label}
      </label>
      <div className={style.inputContainer2}>
        <input
          className={`${style.input} ${
            state.valid === 'false' ? style.inputError : ''
          } `}
          type={id !== 'password' ? type : viewPassword ? 'text' : 'password'}
          id={name}
          name={name}
          value={state.value}
          onChange={onChange}
          // onKeyUp={validation}
          placeholder={placeholder}
          onBlur={validation}
          valid={state.valid}
          readOnly={readonly && true}
        />
        {id === 'password' && state.value.length > 0 && (
          <span
            className={style.iconVisibility}
            id="iconVisibility"
            data-activo="false"
          >
            {viewPassword ? (
              <FontAwesomeIcon
                onClick={toggleViewPassword}
                icon={faEye}
                fontSize="24px"
                width="24px"
                style={{ userSelect: 'none' }}
                title="Ocultar contraseña"
              />
            ) : (
              <FontAwesomeIcon
                onClick={toggleViewPassword}
                icon={faEyeSlash}
                fontSize="24px"
                width="24px"
                style={{ userSelect: 'none' }}
                title="Ver contraseña"
              />
            )}
          </span>
        )}
      </div>
      {state.valid === 'false' && (
        <span className={style.msgError}>{error}</span>
      )}
    </div>
  );
};

export default Input;
