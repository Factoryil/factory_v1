import React from 'react';
import CarruselIngenieriaElectrica from "../components/carrusel/CarruselIngenieriaElectrica";
import SectionV1 from "../components/SectionV1/SectionV1";
import FullWidthSection from '../components/FullWidthSection/FullWidthSection';

import portafolio from '../assets/pdf/portafolio-de-servicios-civiles.pdf'
const IngenieriaAmbientalPage = () => (
    <> 
        <CarruselIngenieriaElectrica />
        <SectionV1
            title="Servicios de Ingeniería Ambiental"
            subtitle="Compromiso con la Sostenibilidad"
            content="En Factory Integrated Logistics SAS, estamos comprometidos con la protección del medio ambiente a través de nuestros servicios de ingeniería ambiental. Ofrecemos soluciones integrales que incluyen la gestión de residuos, el control de la contaminación y la implementación de prácticas sostenibles en proyectos industriales. Nuestro equipo de especialistas trabaja para garantizar que los proyectos cumplan con las normativas ambientales vigentes y busquen reducir el impacto ecológico. Desde la evaluación de impacto ambiental hasta la implementación de tecnologías limpias, nuestro objetivo es promover prácticas responsables y contribuir a un futuro más verde y sostenible."
        />
        <FullWidthSection
        title="Portafolio"
        description="Este es nuestro portafolio de ingenieria civil"
        pdfUrl={portafolio} 
        />
    </>
);

export default IngenieriaAmbientalPage;