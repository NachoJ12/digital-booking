import React, { useEffect, useState } from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import useWindowSize from '../../hooks/useWindowSize';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  const [data, setData] = useState([]);
  const { width } = useWindowSize();

  let desktop = width > 1333 ? true : false;

  useEffect(() => {
    const arrayGallery = [];
    images.map((dat) => {
      return arrayGallery.push({ original: dat.url, thumbnail: dat.url });
    });
    setData(arrayGallery);
  }, [images]);

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
