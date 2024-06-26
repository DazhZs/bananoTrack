import { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const CarouselComponent = () => {
  const images = [
    'https://www.micultivo.bayer.com.mx/adobe/dynamicmedia/deliver/dm-aid--04a6e9e7-5163-4c79-bb37-146e9a681ac4/banano-1280x720.jpg',
    'https://blogdefagro.com/wp-content/uploads/2019/10/cultivo-de-platano.png',
    'https://www.agroclm.com/wp-content/uploads/2022/03/BANANAS-PIXABAY.jpg',
    'https://st.depositphotos.com/1053932/1330/i/450/depositphotos_13304936-stock-photo-canarian-banana-plantation-platano-in.jpg',
    'https://blogdefagro.com/wp-content/uploads/2019/10/cultivo-de-platano.png',
    'https://cdn.wikifarmer.com/wp-content/uploads/2023/11/Rendimiento-cosecha-procesamiento-y-almacenamiento-de-banano.jpg'
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="relative h-[230px]">
      <FaArrowAltCircleLeft
        className="absolute top-1/2 left-2 text-white text-2xl cursor-pointer opacity-50 transform -translate-y-1/2"
        onClick={prevSlide}
      />
      <img
        className="w-full h-full object-cover"
        src={images[current]}
        alt="Imagen"
      />
      <FaArrowAltCircleRight
        className="absolute top-1/2 right-2 text-white text-2xl cursor-pointer opacity-50 transform -translate-y-1/2"
        onClick={nextSlide}
      />
    </div>
  );
};

export default CarouselComponent;
