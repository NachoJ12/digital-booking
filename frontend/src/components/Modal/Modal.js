import React from 'react';
import style from './Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = ({
  children,
  state,
  changeState,
  title = 'Alerta',
  showHeader,
  showOverlay,
  padding = true,
}) => {
  return (
    <>
      {state && (
        <div className={`${style.overlay} ${showOverlay ? style.active : ''} `}>
          <div
            className={`${style.modalContainer} ${
              padding ? '' : style.notPadding
            }`}
          >
            {showHeader && (
              <div className={style.modalHeader}>
                <h2>{title}</h2>
              </div>
            )}

            <button
              className={style.closeButton}
              onClick={() => changeState(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
