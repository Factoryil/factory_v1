// ServicioIngenierias.js
import React from 'react';
import ServicioItem from './ServicioItem';

import iconoServicio1 from '../../assets/img/icono-servicio-1.png';
import iconoServicio2 from '../../assets/img/icono-servicio-2.png';
import iconoServicio3 from '../../assets/img/icono-servicio-3.png';
import iconoServicio4 from '../../assets/img/icono-servicio-4.png';

import './servicios.css';

const servicios = [
    { icono: iconoServicio1, altText: 'TRANSPORTE ESPECIAL', texto: 'TRANSPORTE ESPECIAL', to: '/transportes/especial' },
    { icono: iconoServicio2, altText: 'TRANSPORTE CARGA', texto: 'TRANSPORTE CARGA', to: '/transportes/carga' },
    { icono: iconoServicio3, altText: 'TRANSPORTE HIDROCARBURO', texto: 'TRANSPORTE HIDROCARBUROL', to: '/transportes/hidrocarburos' },
];

const ServicioIngenierias = () => (
    <div className="contenedor-servicios">
        {servicios.map((servicio, index) => (
            <ServicioItem
                key={index}
                icono={servicio.icono}
                altText={servicio.altText}
                texto={servicio.texto}
                to={servicio.to}
            />
        ))}
    </div>
);

export default ServicioIngenierias;
