// ServicioIngenierias.js
import React from 'react';
import ServicioItem from './ServicioItem';

import iconoServicio1 from '../../assets/img/icono-servicio-1.png';
import iconoServicio2 from '../../assets/img/icono-servicio-2.png';
import iconoServicio3 from '../../assets/img/icono-servicio-3.png';
import iconoServicio4 from '../../assets/img/icono-servicio-4.png';
import iconoServicio5 from '../../assets/img/icono-servicio-5.png';

import './servicios.css';

const servicios = [
    { icono: iconoServicio1, altText: 'INGENIERÍA CIVIL', texto: 'INGENIERÍA CIVIL', to: '/ingenierias/civil' },
    { icono: iconoServicio2, altText: 'INGENIERÍA ELECTRONICA', texto: 'INGENIERÍA ELECTRONICA', to: '/ingenierias/electronica' },
    { icono: iconoServicio3, altText: 'INGENIERÍA ELECTRICA', texto: 'INGENIERÍA ELECTRICA', to: '/ingenierias/electrica' },
    { icono: iconoServicio4, altText: 'INGENIERÍA SISTEMAS', texto: 'INGENIERÍA SISTEMAS', to: '/ingenierias/sistema' },
    { icono: iconoServicio5, altText: 'INGENIERÍA AMBIENTAL', texto: 'INGENIERÍA AMBIENTAL', to: '/ingenierias/ambiental' },
    { icono: iconoServicio1, altText: 'INGENIERÍA MECANICA', texto: 'INGENIERÍA MECANICA', to: '/ingenierias/mecanica' },
    { icono: iconoServicio3, altText: 'INGENIERÍA INDUSTRIAL', texto: 'INGENIERÍA INDUSTRIAL', to: '/ingenierias/industrial' },
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
