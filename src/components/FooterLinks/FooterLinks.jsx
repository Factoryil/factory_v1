import React from 'react';
import './FooterLinks.css'; 

const FooterLinks = ({ links }) => (
  <ul className="footer__links">
    {links.map((link, index) => (
      <li key={index}>
        <a href={link.href}>{link.text}</a>
      </li>
    ))}
  </ul>
);

export default FooterLinks;