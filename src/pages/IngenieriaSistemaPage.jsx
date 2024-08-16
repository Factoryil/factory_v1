
import React from 'react';
import CarruselIngenieriaElectrica from "../components/carrusel/CarruselIngenieriaElectrica";
import SectionV1 from "../components/SectionV1/SectionV1";

const IngenieriaSistemaPage = () => (
    <> 
        <CarruselIngenieriaElectrica />
        <SectionV1
            title="Servicios de Ingeniería en Sistemas"
            subtitle="Soluciones Integrales en Sistemas"
            content="En Factory Integrated Logistics SAS, ofrecemos servicios completos en ingeniería en sistemas, diseñando y desarrollando soluciones tecnológicas personalizadas que optimizan los procesos y sistemas de información de las empresas. Nuestro equipo de expertos está capacitado en el análisis, diseño y implementación de sistemas de software y hardware, así como en la integración de sistemas complejos. Nos especializamos en crear soluciones que mejoren la eficiencia operativa y la toma de decisiones, utilizando las últimas tecnologías y mejores prácticas en la industria. Nuestro objetivo es proporcionar soluciones robustas y escalables que se adapten a las necesidades específicas de cada cliente y contribuyan al éxito de sus proyectos."
        />
    </>
);

export default IngenieriaSistemaPage;