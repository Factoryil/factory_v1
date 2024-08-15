import React from 'react';
import './FooterSection.css';

const FooterSection = ({ title, children }) => (
  <div className="footer__section">
    <h2 className="footer__title">{title}</h2>
    <div className="footer__content">
      {children}
    </div>
  </div>
);

export default FooterSection;

