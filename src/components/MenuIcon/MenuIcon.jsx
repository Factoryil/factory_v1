import React from 'react';
import menuIcon from '../../assets/img/menu-1-svgrepo-com.svg';

const MenuIcon = ({ toggleMenu }) => {
  return (
    <div className="contenedor-icono-menu" onClick={toggleMenu}>
      <img src={menuIcon} alt="Menú" />
    </div>
  );
};

export default MenuIcon;
