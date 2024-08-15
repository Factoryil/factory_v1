// ServicioItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const ServicioItem = ({ icono, altText, texto, to }) => (
    <div className="servicio-item">
        <Link to={to || '#'} className="servicio-link">
            <img src={icono} alt={altText} />
            <span>{texto}</span>
        </Link>
    </div>
);

export default ServicioItem;
