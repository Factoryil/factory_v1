import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import CarruselBase from './CarruselBase';

import imagenCarrusel1 from '../../assets/img/hero-06.jpg';
import imagenCarrusel2 from '../../assets/img/slider-1.jpg';

const CarruselInicio = () => {
  return (
    <CarruselBase>
      <SwiperSlide>
        <div
          className="swiper-slide"
          style={{ backgroundImage: `url(${imagenCarrusel1})` }}
        >
          <div className="overlay"></div>
          <div className="contenedor-contenido-carrusel">
            <div className="title" data-swiper-parallax="-300">SOMOS FACTORY</div>
            <div className="subtitle" data-swiper-parallax="-200">INTEGRATED LOGISTICS</div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                INGENIERÍA CIVIL, ELECTRÓNICA, ELECTRICA, SISTEMAS, MECÁNICA, AMBIENTAL E INDUSTRIAL. LOGÍSTICA “TRANSPORTE ESPECIAL DE PASAJEROS, TRANSPORTE TERRESTRE DE CARGA: SECA, LIQUIDOS, SOLIDOS, CONDENSADAS Y PRODUCTOS DERIVADOS DEL PETRÓLEO”, ALQUILER DE VEHÍCULOS Y MAQUINARIA PESADA, COMERCIALIZADOR DE BIENES Y SERVICIOS ONLINE.
              </p>
            </div>
            <div className="contenedor-link-carrusel">
              <Link to="/" className="item-link-carrusel color-naranja">CONTACTANOS</Link>
            </div>
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
              <Link to="/" className="item-link-carrusel color-naranja">CONOCE MÁS</Link>
              <Link to="/" className="item-link-carrusel color-azul">ESCRÍBENOS</Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      </CarruselBase>

  );
};

export default CarruselInicio;
