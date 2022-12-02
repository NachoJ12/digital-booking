import React from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import style from './ProductGallery.module.css';

const ProductGallery = ({ desktop, images, toggleModal }) => {
  return (
    // <section className={style.galleryContainer}>
    <>
      {desktop ? (
        <>
          <div className={style.imagesDesktopContainer}>
            <div className={style.bigImageContainer}>
              <img key={images[0].id} src={images[0].url} alt="foto" />
            </div>
            <div className={style.smallsImageContainer}>
              {images.slice(1, 3).map((image) => (
                <div key={image.id}>
                  <img src={image.url} alt="foto" />
                </div>
              ))}
            </div>
            <div className={style.smallsImageContainer2}>
              {images.slice(3, 5).map((image) => (
                <div key={image.id}>
                  <img src={image.url} alt="foto" />
                </div>
              ))}
            </div>

            <button
              type="link"
              className={style.viewMoreText}
              // onClick={() => setStateModal(!stateModal)}
              onClick={toggleModal}
            >
              Ver más
            </button>
          </div>
          {/* <ImageGallery /> */}
        </>
      ) : (
        <ImageGallery images={images.slice(0, 5)} />
      )}
      {/* </section> */}
    </>
  );
};

export default ProductGallery;
