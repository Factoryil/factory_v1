import React from 'react';
import CarruselIngenieriaCivil from "../components/carrusel/CarruselIngenieriaCivil";
import SectionV1 from "../components/SectionV1/SectionV1";
import FullWidthSection from '../components/FullWidthSection/FullWidthSection';

import portafolio from '../assets/pdf/portafolio-de-servicios-civiles.pdf'

const IngenieriaCivilPage = () => (
    <> 
        {/* <CarruselIngenieriaCivil /> */}
        <SectionV1
                title="Servicios de Ingeniería Civil"
                subtitle="Especialistas en Ingeniería Civil"
                content="En Factory Integrated Logistics SAS, ofrecemos servicios integrales de ingeniería civil, respaldados por un equipo de profesionales altamente capacitados y con amplia experiencia en el sector. Nos especializamos en el diseño, planificación y ejecución de proyectos de infraestructura, garantizando calidad y cumplimiento de los más altos estándares. Desde la construcción de edificios y carreteras hasta la rehabilitación de estructuras existentes, nuestro enfoque es proporcionar soluciones innovadoras y eficientes que satisfagan las necesidades de nuestros clientes y contribuyan al desarrollo urbano y económico."
        /> 

<SectionV1
                title=""
                subtitle="¿QUIÉNES SOMOS?"
                content="Somos un Grupo de Ingeniería
Civil y Arquitectura, Certificado en Normas
ISO 9001, 14001, 45001 y NORSOK,
Dedicado a la Ejecución, Diseño y
Mantenimiento de Infraestructuras en
Colombia. Nos Especializamos en
Proyectos de Construcción Civil,
Urbanización y Desarrollo Vial,
garantizando Calidad, Seguridad y
Sostenibilidad en cada Obra."
        /> 

         <FullWidthSection
            title="Portafolio"
            description="Este es nuestro portafolio de ingenieria civil"
            pdfUrl={portafolio} 
        />

    </>
);

export default IngenieriaCivilPage;