import React, { useEffect, useState } from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ImageGallery.css';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    originalAlt: 'Alt de Imagen',
    description: 'Descripcion de la imagen',
    originalTitle: 'Original Title buscadores imagen',
    thumbnailTitle: 'Title Thumbnail',
  },
];

const ImageGallery = () => {
  const [widthSize, setWithSize] = useState(window.innerWidth);

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
          items={images}
          showPlayButton={true}
          showFullscreenButton={false}
          showIndex={true}
          autoPlay={false}
          infinite={true}
          //   showBullets={true}
        />
      ) : (
        <ReactImageGallery
          items={images}
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
