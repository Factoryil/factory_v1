import React from 'react';
import './LocalizacionBloque.css';
import bgImage from '../../assets/img/bg-01.jpg';
import icono1 from '../../assets/img/gps-location-map-navigation-direction-svgrepo-com.png';
import icono2 from '../../assets/img/gps-map-svgrepo-com.png';

const LocalizacionBloque = () => {
  return (
    <div className="contenedor-localizacion-satelital">
      <img src={bgImage} alt="Background" />
      <div className="contenido-localizacion-satelital">
        <span>LOCALIZACIÓN SATELITAL</span>
        <h3>LOCALIZA TU VEHÍCULO DESDE LA COMODIDAD DE TU HOGAR</h3>
        <div className="contenedor-bloque-localizacion">
          <img src={icono1} alt="Icono 1" />
          <div>
            <span>Seguridad remota</span>
            <p>Para todo tipo de vehículos y equipos para el sector industrial, constructor y petrolero</p>
          </div>
        </div>
        <div className="contenedor-bloque-localizacion">
          <img src={icono2} alt="Icono 2" />
          <div>
            <span>Desde tu celular</span>
            <p>Protección activa las 24 horas, sensor de velocidad, botón S.O.S y sensor de alejamiento</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocalizacionBloque;
