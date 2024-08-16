import React from 'react';
import CarruselIngenieriaElectrica from "../components/carrusel/CarruselIngenieriaElectrica";
import SectionV1 from "../components/SectionV1/SectionV1";

const IngenieriaIndustrialPage = () => (
    <> 
        <CarruselIngenieriaElectrica />
        <SectionV1
            title="Servicios de Ingeniería Industrial"
            subtitle="Optimización y Eficiencia en Procesos Industriales"
            content="En Factory Integrated Logistics SAS, ofrecemos servicios integrales en ingeniería industrial, enfocados en la optimización de procesos y la mejora continua en entornos industriales. Nuestro equipo de ingenieros industriales se especializa en el análisis y rediseño de procesos, gestión de la cadena de suministro, control de calidad y la implementación de sistemas de gestión. Trabajamos para incrementar la eficiencia operativa, reducir costos y mejorar la calidad de los productos y servicios. Aplicamos metodologías avanzadas y herramientas de última generación para ofrecer soluciones personalizadas que se alineen con los objetivos estratégicos de nuestros clientes y contribuyan al crecimiento y éxito de sus operaciones."
        />
    </>
);

export default IngenieriaIndustrialPage;