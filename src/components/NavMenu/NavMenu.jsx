import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Dropdown from '../Dropdown/Dropdown';

const NavMenu = ({ isMenuOpen, toggleMenu }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    if (!isMenuOpen) {
      setActiveDropdown(null); // Cierra todos los submenús cuando el menú principal se cierra
    }
  }, [isMenuOpen]);

  const handleDropdownToggle = (title) => {
    setActiveDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <div className={`nav-menu ${isMenuOpen ? 'toggle' : ''}`} id="id_nav_menu">
      <Link to="/" className="nav-menu-item" onClick={toggleMenu}>INICIO</Link> 

      <Dropdown
        title="QUIENES SOMOS"
        items={[
          { label: 'Quienes somos', to: '/quienes-somos' },
          { label: 'Certificados', to: '/quienes-somos/certificados' },
        ]}
        isOpen={activeDropdown === 'QUIENES SOMOS'}
        onToggle={() => handleDropdownToggle('QUIENES SOMOS')}
        toggleMenu={toggleMenu}
      />

      <Dropdown
        title="INGENIERIAS"
        items={[
          { label: 'Ingenierías', to: '/ingenierias' },
          { label: 'Ingeniería civil', to: '/ingenierias/civil' },
          { label: 'Ingeniería electronica', to: '/ingenierias/electronica' },
          { label: 'Ingeniería electrica', to: '/ingenierias/electrica' },
          { label: 'Ingeniería de sistemas', to: '/ingenierias/sistema' },
          { label: 'Ingeniería ambiental', to: '/ingenierias/ambiental' },
          { label: 'Ingeniería mecánica', to: '/ingenierias/mecanica' },
          { label: 'Ingeniería industrial', to: '/ingenierias/industrial' },
        ]}
        isOpen={activeDropdown === 'INGENIERIAS'}
        onToggle={() => handleDropdownToggle('INGENIERIAS')}
        toggleMenu={toggleMenu}
      />

      <Dropdown
        title="LOGISTICA"
        items={[
          { label: 'Logística', to: '/logistica' },
          {
            title: 'Transporte',
            subItems: [
              { label: 'Transportes', to: '/transportes' },
              { label: 'Transporte de carga', to: '/transportes/carga' },
              { label: 'Transporte especial', to: '/transportes/especial' },
              { label: 'Transporte de hidrocarburos', to: '/transportes/hidrocarburos' },
            ],
          },
        ]}
        isOpen={activeDropdown === 'LOGISTICA'}
        onToggle={() => handleDropdownToggle('LOGISTICA')}
        toggleMenu={toggleMenu}
      />

      <Link to="/blog" className="nav-menu-item" onClick={toggleMenu}>BLOG</Link> 
      <Link to="/contacto" className="nav-menu-item" onClick={toggleMenu}>CONTACTO</Link>
    </div>
  );
};

export default NavMenu;
