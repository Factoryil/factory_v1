import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import arrowIcon from '../../assets/img/down-arrow-svgrepo-com.svg';

const Dropdown = ({ title, items, toggleMenu }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown-container">
      <button className="nav-menu-item dropdown-toggle" onClick={toggleDropdown}>
        <span>{title}</span>
        <img src={arrowIcon} alt="arrow" />
      </button>
      <div className={`dropdown-menu ${isDropdownOpen ? 'toggle' : ''}`}>
        {items.map((item, index) => (
          item.subItems ? (
            <Dropdown key={index} title={item.title} items={item.subItems} toggleMenu={toggleMenu} />
          ) : (
            <Link key={index} to={item.to} className="dropdown-item" onClick={toggleMenu}>{item.label}</Link>  
          )
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
