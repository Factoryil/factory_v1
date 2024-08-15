import React from 'react';
import bgTestimonioFactory from '../../assets/img/png-img-07.png';

import './TestimonioFactory.css';

const TestimonioFactory = () => {
  return (
    <div className="contenedor-testimonio-factory">
      <div className="item-testimonio-factory">
        <img src={bgTestimonioFactory} alt="" />

        <div className="item-testimonio-factory-contenido">
          <p>
            Factory se ha convertido en el aliado que llevaba esperando mucho
            tiempo. Porque reúne lo que se necesita en el desarrollo de proyectos
            de ingeniería: profesionalismo, cumplimiento, responsabilidad y
            calidad en el proceso.
          </p>

          <h4 className="bdevs-slick-title">Julián Salazar Valencia</h4>
          <h5 className="bdevs-slick-subtitle">CEO, LAAO.COM</h5>
        </div>
      </div>
    </div>
  );
};

export default TestimonioFactory;
