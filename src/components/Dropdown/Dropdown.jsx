import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import arrowIcon from '../../assets/img/down-arrow-svgrepo-com.svg';

const Dropdown = ({ title, items, toggleMenu, isOpen, onToggle }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown-container">
      <button className="nav-menu-item dropdown-toggle" onClick={onToggle}>
        <span>{title}</span>
        <img src={arrowIcon} alt="arrow" />
      </button>
      <div className={`dropdown-menu ${isOpen ? 'toggle' : ''}`}>
        {items.map((item, index) => (
          item.subItems ? (
            <Dropdown
              key={index}
              title={item.title}
              items={item.subItems}
              toggleMenu={toggleMenu}
              isOpen={isDropdownOpen} // Submenú principal controla esto
              onToggle={handleDropdownToggle}
            />
          ) : (
            <Link key={index} to={item.to} className="dropdown-item" onClick={toggleMenu}>{item.label}</Link>  
          )
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
