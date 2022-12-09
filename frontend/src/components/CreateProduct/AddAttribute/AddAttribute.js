import React, { useEffect, useState } from 'react';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
//import baseUrl from '../../../utils/baseUrl.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../CreateProduct.module.css';
import Input from '../../Forms/Input/Input';

const AddAttribute = ({ getAttributes }) => {
  //const [arrayGetAttributes, setArrayGetAttributes] = useState([]);
  const [arrayAttributes, setArrayAttributes] = useState([]);
  const [attributeName, setAttributeName] = useState({
    value: '',
    valid: null,
  });
  const [attributeIcon, setAttributeIcon] = useState({
    value: '',
    valid: null,
  });
  const [msgError, setMsgError] = useState(null);

  //console.log('attributeName', attributeName);
  //console.log('attributeIcon', attributeIcon);
  //console.log('arrayAttributes', arrayAttributes);

  useEffect(() => {
    setMsgError(null);
  }, [attributeName.value, attributeIcon.value]);

  useEffect(() => {
    getAttributes(arrayAttributes);
  }, [arrayAttributes, getAttributes]);

  // const existAttribute = () => {
  //   arrayAttributes.filter(attribute => )
  // }

  const handleAddAttribute = () => {
    setArrayAttributes([
      ...arrayAttributes,
      { name: attributeName.value, icon: attributeIcon.value, valid: 'true' },
    ]);
    setAttributeName({ value: '', valid: null });
    setAttributeIcon({ value: '', valid: null });
  };

  const handleDeleteAttribute = (attributeValue) => {
    const newArrayAttributes = arrayAttributes.filter(
      (attr) => attr.name !== attributeValue
    );
    setArrayAttributes(newArrayAttributes);
    //console.log('individual attr delete', attributeValue);
    //console.log('arrayAttributesBeforeDeleteAttr', arrayAttributes);
  };

  /* Arreglar responsive -411px*/

  return (
    <>
      {arrayAttributes.map((attributeArray, i) => {
        //console.log('attributeArrayMAP', attributeArray);
        return (
          <div className={style.containerDoubleInput} key={i}>
            <div>
              <Input
                state={{ value: attributeArray.name }}
                //changeState={setImage}
                label="Nombre"
                type="text"
                readonly
              />
              <Input
                state={{ value: attributeArray.icon }}
                //changeState={setImage}
                label="Ícono"
                type="text"
                readonly
              />
            </div>
            <button
              className={`${style.btn} ${style.btnDelete}`}
              onClick={() => handleDeleteAttribute(attributeArray.name)}
              type="button"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        );
      })}
      <div className={style.containerDoubleInput}>
        <div className={style.doubleInput}>
          <Input
            state={attributeName}
            changeState={setAttributeName}
            label="Nombre"
            type="text"
            placeholder="Wifi"
            error={msgError}
          />
          <Input
            state={attributeIcon}
            changeState={setAttributeIcon}
            label="Ícono"
            type="text"
            placeholder="fa-wifi"
            error={msgError}
          />
        </div>
        <button
          className={`${style.btn} ${style.btnPlus}`}
          onClick={handleAddAttribute}
          type="button" // Para que no se ejecute el submit y se envien cada vez las imagenes
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </>

    // <div>
    //   {attributes.map((attribute) => (
    //     <div className={style.feature} key={attribute.id}>
    //       <FontAwesomeIcon icon={fas[attribute.icon]} />
    //       <p>{attribute.name}</p>
    //     </div>
    //   ))}
    // </div>
  );
};

export default AddAttribute;
