import React from 'react';

import CarruselInicio from "../components/carrusel/CarruselInicio";
import ServicioInicio from "../components/servicios/ServicioInicio";
import AcercaDeNosotros from "../components/AcercaDeNosotros/AcercaDeNosotros";
import LocalizacionBloque from "../components/LocalizacionBloque/LocalizacionBloque";
import TestimonioFactory from "../components/TestimonioFactory/TestimonioFactory";

const InicioPage = () => (
    <>
        <CarruselInicio />
        <ServicioInicio />
        <AcercaDeNosotros />
        <LocalizacionBloque />
        <TestimonioFactory />
    </>
);

export default InicioPage;



