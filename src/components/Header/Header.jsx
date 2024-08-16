import React, { useState, useEffect } from 'react';
import './Header.css'; 
import LogoHeader from '../LogoHeader/LogoHeader.jsx';
import MenuIcon from '../MenuIcon/MenuIcon.jsx';
import NavMenu from '../NavMenu/NavMenu.jsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false); // Cierra el menú cuando se cambia el tamaño de la ventana
    }
  };

  useEffect(() => {
    // Maneja el scroll y el evento de redimensionamiento
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    window.addEventListener('resize', handleResize);

    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <div className="header">
      <LogoHeader  handleResize={handleResize}/>
      <MenuIcon toggleMenu={toggleMenu} />
      <NavMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Header;
