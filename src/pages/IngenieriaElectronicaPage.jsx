import React from 'react';
import CarruselIngenieriaElectrica from "../components/carrusel/CarruselIngenieriaElectrica";
import SectionV1 from "../components/SectionV1/SectionV1";

const IngenieriaElectronicaPage = () => (
    <> 
        <CarruselIngenieriaElectrica />
        <SectionV1
            title="Servicios de Ingeniería Electrónica"
            subtitle="Innovación y Tecnología en Electrónica"
            content="En Factory Integrated Logistics SAS, ofrecemos soluciones avanzadas en ingeniería electrónica, enfocándonos en el diseño, desarrollo e implementación de sistemas electrónicos de alta tecnología. Nuestro equipo de ingenieros está especializado en áreas como circuitos integrados, sistemas embebidos, automatización y control, así como en el desarrollo de productos electrónicos innovadores. Nos comprometemos a proporcionar soluciones que mejoren la funcionalidad y eficiencia de los dispositivos electrónicos, utilizando las últimas tecnologías y metodologías de diseño. Nuestro objetivo es superar las expectativas de nuestros clientes y contribuir al avance tecnológico en la industria."
        />
    </>
);

export default IngenieriaElectronicaPage;