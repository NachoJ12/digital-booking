import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Input from '../../Forms/Input/Input';
import style from '../CreateProduct.module.css';

const AddImages = ({ getImages }) => {
  const [arrayImages, setArrayImages] = useState([]);
  const [image, setImage] = useState({ value: '', valid: null });
  const [msgError, setMsgError] = useState(null);

  useEffect(() => {
    setMsgError(null);
  }, [image.value]);

  useEffect(() => {
    getImages(arrayImages);
  }, [arrayImages, getImages]);

  const regularExpressions = {
    url: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
  };

  const isValidFormat = (urlValue) => {
    if (regularExpressions.url.test(urlValue)) {
      //console.log('Successful match');
      return true;
    } else {
      //console.log('No match');
      setMsgError('El formato de la URL es invalido');
      return false;
    }
  };

  const isUrlRepeat = (urlValue) => {
    const findRepeatUrl = arrayImages.filter((img) => img.value === urlValue);
    if (findRepeatUrl.length >= 1) {
      return true;
    }
    return false;
  };
  //console.log(isUrlRepeat(image.value));

  /* Optimizar los if/else */
  const handleAddImage = () => {
    const urlRepeat = isUrlRepeat(image.value);
    const formatValid = isValidFormat(image.value);
    if (!urlRepeat) {
      if (formatValid) {
        setArrayImages([...arrayImages, { ...image, valid: 'true' }]);
        setImage({ value: '', valid: null });
      } else {
        setImage((prevState) => {
          return { ...prevState, valid: 'false' };
        });
        setMsgError('El formato de la URL es invalido');
      }
    } else {
      setImage((prevState) => {
        return { ...prevState, valid: 'false' };
      });
      setMsgError('La url se encuentra repetida');
    }
  };

  const handleDeleteImage = (imgValue) => {
    const newArrayImages = arrayImages.filter((img) => img.value !== imgValue);
    setArrayImages(newArrayImages);
  };

  // useEffect(() => {
  //   console.log(arrayImages);
  // }, [arrayImages]);
  //console.log(image);

  return (
    <>
      {arrayImages.map((imageArray, i) => {
        //console.log('img', imageArray);
        return (
          <div className={style.containerInput} key={i}>
            <Input
              state={imageArray}
              //changeState={setImage}
              //label="Imagen"
              type="text"
              readonly
            />
            <button
              className={`${style.btn} ${style.btnDelete}`}
              onClick={() => handleDeleteImage(imageArray.value)}
              type="button"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        );
      })}
      <div className={style.containerInput}>
        <Input
          state={image}
          changeState={setImage}
          //label="Agregar imagen"
          type="text"
          placeholder="Insertar https://"
          error={msgError}
        />
        <button
          className={`${style.btn} ${style.btnPlus}`}
          onClick={handleAddImage}
          type="button" // Para que no se ejecute el submit y se envien cada vez las imagenes
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </>
  );
};

export default AddImages;
