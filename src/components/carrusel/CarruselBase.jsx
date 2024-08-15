import React, { useRef } from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carrusel.css';

import nextArrow from '../../assets/img/next-right-arrow-svgrepo-com.svg';
import prevArrow from '../../assets/img/left-arrow-svgrepo-com.svg';

const CarruselBase = ({ children }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="contenedor-carrusel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Parallax]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{ clickable: true }}
        parallax={true}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {children}

        <div className="swiper-button-next" ref={navigationNextRef}>
          <img src={nextArrow} alt="Next" />
        </div>
        <div className="swiper-button-prev" ref={navigationPrevRef}>
          <img src={prevArrow} alt="Previous" />
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default CarruselBase;
