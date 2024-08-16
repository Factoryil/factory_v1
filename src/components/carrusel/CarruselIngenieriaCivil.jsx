import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import CarruselBase from './CarruselBase';

import imagenCarrusel1 from '../../assets/img/ingenieria-2.jpg';
import imagenCarrusel2 from '../../assets/img/slider-1.jpg';

const CarruselIngenieriaCivil = () => {
  return (
    <CarruselBase>
      <SwiperSlide>
        <div
          className="swiper-slide"
          style={{ backgroundImage: `url(${imagenCarrusel1})` }}
        >
          <div className="overlay"></div>
          <div className="contenedor-contenido-carrusel">
  
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="swiper-slide"
          style={{ backgroundImage: `url(${imagenCarrusel2})` }}
        >
          <div className="overlay"></div>
          <div className="contenedor-contenido-carrusel">
            <div className="title" data-swiper-parallax="-300">Visión Innovadora</div>
            <div className="subtitle" data-swiper-parallax="-200">Y VANGUARDISTA DEL MERCADO</div>
            <div className="text" data-swiper-parallax="-100">
              <p>PRESTANDO SOLUCIONES INTEGRALES QUE POTENCIAN LA ECONOMÍA DE SU EMPRESA</p>
            </div>
            <div className="contenedor-link-carrusel">
              <Link to="/contacto" className="item-link-carrusel color-naranja">ESCRÍBENOS</Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      </CarruselBase>

  );
};

export default CarruselIngenieriaCivil;
