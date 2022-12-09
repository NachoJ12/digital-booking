import React from 'react';
import style from './TextArea.module.css';

const TextArea = ({ state, changeState, label, name, error, placeholder }) => {
  const onChange = (e) => {
    changeState(e.target.value);
    // changeState({ value: e.target.value });
  };

  return (
    <div className={style.textAreaContainer}>
      <label className={style.label} htmlFor={name}>
        {label}
      </label>
      <textarea
        value={state.value}
        onChange={onChange}
        placeholder={placeholder}
        id={name}
        name={name}
      />
    </div>
  );
};

export default TextArea;
