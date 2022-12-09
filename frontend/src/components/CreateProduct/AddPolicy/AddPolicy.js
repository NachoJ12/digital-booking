import React, { useState } from 'react';
import TextArea from '../../Forms/TextArea/TextArea';
import style from './AddPolicy.module.css';

const AddPolicy = ({ titlePolicy, getValuePolicy, name }) => {
  const [policy, setPolicy] = useState('');

  const handleChange = (value) => {
    setPolicy(value);
    getValuePolicy(value);
  };
  //console.log('pol', policy);

  return (
    <div className={style.containerPolicy}>
      <h3>{titlePolicy}</h3>
      <TextArea
        state={policy}
        label={'Descripción'}
        changeState={handleChange}
        placeholder={'Escriba aquí'}
        name={name}
      />
    </div>
  );
};

export default AddPolicy;
