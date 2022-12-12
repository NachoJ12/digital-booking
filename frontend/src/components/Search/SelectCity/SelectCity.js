import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import style from './SelectCity.module.css';
import baseUrl from '../../../utils/baseUrl.json';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

const SelectCity = ({ getCity }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cities, setCities] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  /* */
  const ref = useRef();
  useOnClickOutside(ref, () => setIsOpen(false));
  /* */

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    getCity(value);
  };

  useEffect(() => {
    fetch(`${baseUrl.url}/cities`)
      .then((res) => res.json())
      .then((data) => {
        setCities(data);
      });
  }, []);

  let selectText = selectedOption
    ? `${selectedOption.name}, ${selectedOption.country.name}`
    : '¿A dónde vamos?';

  return (
    <div ref={ref} className={style.selectBox}>
      {/* select */}
      <div className={style.dropDownHeader} onClick={toggling}>
        {/* selectContent*/}
        <div className={style.selectContent}>
          <FontAwesomeIcon icon={faLocationDot} />
          <p
            className={
              selectedOption ? style.description : style.initialDescription
            }
          >
            {selectText}
          </p>
        </div>
      </div>
      {isOpen && (
        <ul className={style.dropDownList}>
          {/* options*/}
          {cities.map((option) => (
            <li
              className={style.optionContent}
              onClick={onOptionClicked(option)}
              key={option.id}
            >
              {/* option */}
              <FontAwesomeIcon icon={faLocationDot} />
              <div>
                <h2 className={style.title}>{option.name}</h2>
                <p className={style.description}>{option.country.name}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectCity;
