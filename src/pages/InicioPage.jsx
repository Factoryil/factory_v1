import React from 'react';

import CarruselInicio from "../components/carrusel/CarruselInicio";
import ServicioInicio from "../components/servicios/ServicioInicio";
import SectionV1 from "../components/SectionV1/SectionV1";
import LocalizacionBloque from "../components/LocalizacionBloque/LocalizacionBloque";
import TestimonioFactory from "../components/TestimonioFactory/TestimonioFactory";

const InicioPage = () => (
    <>
        <CarruselInicio />
        <ServicioInicio />
        <SectionV1
            title="Acerca de nosotros"
            subtitle="FACTORY INTEGRATED LOGISTICS SAS"
            content="Somos una fábrica de ingeniería, logística y comercio online; Nuestro enfoque innovador y vanguardista, respaldado por una amplia experiencia en el mercado, desarrollando software para liderar, integrar y automatizar todos los procesos operativos, ofreciendo control total y eficacia en la ejecución de obras, así como servicios de transporte especial de pasajeros, transporte de carga, alquiler de vehículos y maquinaria amarilla, “cumpliendo las normas del Ministerio de Transporte de Colombia”, y la comercialización de bienes y servicios online."
        />
        <LocalizacionBloque />
        <TestimonioFactory />
    </>
);

export default InicioPage;



