// ServicioInicio.js
import React from 'react';
import ServicioItem from './ServicioItem';

import iconoServicio1 from '../../assets/img/icono-servicio-1.png';
import iconoServicio2 from '../../assets/img/icono-servicio-2.png';
import iconoServicio3 from '../../assets/img/icono-servicio-3.png';
import iconoServicio4 from '../../assets/img/icono-servicio-4.png';
import iconoServicio5 from '../../assets/img/icono-servicio-5.png';

import './servicios.css';

const servicios = [
    { icono: iconoServicio1, altText: 'Ingenierías', texto: 'INGENIERIAS', to: '/ingenierias' },
    { icono: iconoServicio2, altText: 'Transporte de Pasajeros', texto: 'LOGISTICA', to: '/logistica' },
    { icono: iconoServicio3, altText: 'Transporte de Carga', texto: 'TRANSPORTE ESPECIAL', to: '/transporte-especial' },
    { icono: iconoServicio4, altText: 'Transporte de Carga', texto: 'TRANSPORTE DE CARGA', to: '/transporte-carga' },
    { icono: iconoServicio5, altText: 'Maquinaria Amarilla', texto: 'MAQUINARIA AMARILLA', to: '/maquinaria-amarilla' },
    { icono: iconoServicio5, altText: 'Alquiler de Vehículos', texto: 'ALQUILER DE VEHÍCULOS', to: '/alquiler-vehiculos' },
];

const ServicioInicio = () => (
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

export default ServicioInicio;
