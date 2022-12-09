import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import style from './Select.module.css';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

const SelectCategory = ({
  arrayDataOptions,
  label,
  placeholder,
  name,
  getValue,
  isLocationIcon,
  isOptionTextInTwoLines,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  /* */
  const ref = useRef();
  useOnClickOutside(ref, () => setIsOpen(false));
  /* */

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    getValue(value);
  };

  let selectText = selectedOption ? `${selectedOption.name}` : placeholder;

  return (
    <div className={style.selectContainer}>
      <label className={style.label} htmlFor={name}>
        {label}
      </label>
      <div ref={ref} className={`${style.selectBox} ${isOpen && style.active}`}>
        {/* select */}
        <div className={style.dropDownHeader} onClick={toggling}>
          {/* selectContent*/}
          <div className={style.selectContent}>
            {isLocationIcon && <FontAwesomeIcon icon={faLocationDot} />}
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
            {arrayDataOptions.map((option) => (
              <li
                className={style.optionContent}
                onClick={onOptionClicked(option)}
                key={option.id}
              >
                {/* option */}
                {isLocationIcon && <FontAwesomeIcon icon={faLocationDot} />}
                <div>
                  {isOptionTextInTwoLines ? (
                    <>
                      <h2 className={style.title}>{option.name}</h2>
                      <p className={style.description}>{option.description}</p>
                    </>
                  ) : (
                    <p className={style.description}>{option.name}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
};

export default SelectCategory;
