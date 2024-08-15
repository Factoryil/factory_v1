import React from 'react';
import { Link } from 'react-router-dom'; 
import Dropdown from '../Dropdown/Dropdown';

const NavMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className={`nav-menu ${isMenuOpen ? 'toggle' : ''}`} id="id_nav_menu">
      <Link to="/" className="nav-menu-item" onClick={toggleMenu}>INICIO</Link> 

<Dropdown
  toggleMenu={toggleMenu}
  title="QUIENES SOMOS"
  items={[
    { label: 'Quienes somos', to: '/quienes-somos' },
    { label: 'Certificados', to: '/quienes-somos/certificados' },
  ]}
/>

<Dropdown
  toggleMenu={toggleMenu}
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
/>

<Dropdown
  toggleMenu={toggleMenu}
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
/>

<Link to="/blog" className="nav-menu-item" onClick={toggleMenu}>BLOG</Link> 
<Link to="/contacto" className="nav-menu-item" onClick={toggleMenu}>CONTACTO</Link>
    </div>
  );
};

export default NavMenu;
