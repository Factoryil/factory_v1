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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  return (
    <div className="header">
      <LogoHeader />
      <MenuIcon toggleMenu={toggleMenu} />
      <NavMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Header;
