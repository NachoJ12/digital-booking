import React, { useEffect, useState } from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  const [widthSize, setWithSize] = useState(window.innerWidth);
  const [data, setData] = useState(images);
  console.log('data', data);

  let desktop = widthSize > 1333 ? true : false;

  useEffect(() => {
    window.addEventListener('resize', handleResize, false);
  }, [widthSize]);

  console.log(widthSize);

  const handleResize = () => {
    setWithSize(window.innerWidth);
  };

  console.log('desktop', desktop);

  /* Revisar como hacer para que el estado del autoplay haga efecto al cambiar el responsive, ya que queda fijo y no se altera el estado interno una vez abierto*/

  return (
    <div className="containerReactImageGallery">
      {desktop ? (
        <ReactImageGallery
          items={data}
          showPlayButton={false}
          showFullscreenButton={false}
          showIndex={true}
          autoPlay={false}
          infinite={true}
          //   showBullets={true}
        />
      ) : (
        <ReactImageGallery
          items={data}
          showPlayButton={false}
          showFullscreenButton={false}
          showIndex={true}
          showThumbnails={false}
          slideDuration={1000}
          swipingTransitionDuration={500}
          slideInterval={3000}
          autoPlay={true}
          infinite={true}
        />
      )}
    </div>
  );
};

export default ImageGallery;
