import React from 'react';
import FooterSection from '../FooterSection/FooterSection';
import FooterLinks from '../FooterLinks/FooterLinks';
import './Footer.css';

const links = [
  { href: '#', text: 'Inscribirse como proveedor' },
  { href: '#', text: 'Inscribirse como cliente' },
  { href: '#', text: 'Inscribir Vehículo' },
  { href: '#', text: 'PQRS' },
];

const Footer = () => (
  <div className="footer">
    <div className="footer__container">
      <FooterSection title="Nuestra Empresa">
        <p className='color-gris'>Somos una empresa de Ingeniería integral, ejecutamos proyectos que potencian la economía de su empresa. Ingeniería Eléctrica, de Sistemas, Electrónica, Mecánica, Civil, entre otras.</p>
      </FooterSection>
      <FooterSection title="Ubicaciones">
        <strong>SEDE TECNOLÓGICA</strong><br />BARRANCABERMEJA<br />
        Calle 52A #34c-60<br /><br />
        <strong>SEDE LOGÍSTICA</strong><br />BARRANQUILLA-ATLÁNTICO<br />
        CALLE 65B#42-45
      </FooterSection>
      <FooterSection title="Servicios">
        Carga liviana / Transporte de pasajeros / Servicios eléctricos / Ingeniería Civil
      </FooterSection>
      <FooterSection title="Links útiles">
        <FooterLinks links={links} />
      </FooterSection>
    </div>
  </div>
);

export default Footer;
