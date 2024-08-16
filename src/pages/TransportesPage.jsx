import React from 'react';
import { Outlet } from 'react-router-dom';
import ServicioTransportes from "../components/servicios/ServicioTransportes";

import '../styles/IngenieriasPage.css'

const TransportesPage = () => (
    <>
    <Outlet />

    <div className='contenedor-ingenierias'>
        <div className='contenedor-ingenierias-titulo'>
            <h2>TRANSPORTES</h2>
        </div>
        <ServicioTransportes />
    </div>
    </>
);

export default TransportesPage;