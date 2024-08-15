import React from 'react';
import { Link } from 'react-router-dom';  // Importar Link
import logo from '../../assets/img/logoppal2.png'; 

const LogoHeader = () => {
  return (
    <Link to="/" className="contenedor-logo-pagina">  {/* Cambiar <a> a <Link> */}
      <img src={logo} alt="Logo" />
    </Link>
  );
};

export default LogoHeader;
