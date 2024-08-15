import React from 'react';
import { Outlet } from 'react-router-dom';
import ServicioIngenierias from "../components/servicios/ServicioIngenierias";
import IconSliderCertificados from "../components/IconSlider/IconSliderCertificados";

import '../styles/IngenieriasPage.css'

const IngenieriasPage = () => (
    <>
    <Outlet />

    <div className='contenedor-ingenierias'>
        <div className='contenedor-ingenierias-titulo'>
            <h2>INGENIERÍA CIVIL,ELECTRONICA,ELECTRICA,SISTEMAS,AMBIENTAL,
            MECANICA Y INDUSTRIAL</h2>
        </div>
        <ServicioIngenierias />
    </div>
    </>
);

export default IngenieriasPage;