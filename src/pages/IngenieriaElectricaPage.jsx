import React from 'react';
import CarruselIngenieriaElectrica from "../components/carrusel/CarruselIngenieriaElectrica";
import SectionV1 from "../components/SectionV1/SectionV1";

const IngenieriaElectricaPage = () => (
    <> 
        <CarruselIngenieriaElectrica />
        <SectionV1
            title="Servicios de Ingeniería Eléctrica"
            subtitle="Ingeniería Eléctrica"
            content="En Factory Integrated Logistics SAS, brindamos soluciones completas en ingeniería eléctrica, abarcando desde el diseño y la planificación hasta la implementación y el mantenimiento de sistemas eléctricos. Nuestro equipo de expertos está capacitado para abordar proyectos complejos que incluyen redes eléctricas, sistemas de energía renovable, automatización y control industrial. Nos comprometemos a ofrecer soluciones eficientes y seguras que optimicen el rendimiento energético y contribuyan al desarrollo sostenible. Trabajamos estrechamente con nuestros clientes para asegurar que cada proyecto cumpla con los estándares más exigentes y satisfaga sus necesidades específicas."
        /> 
    </>
);

export default IngenieriaElectricaPage;