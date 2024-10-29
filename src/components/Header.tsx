import React, { useState } from 'react';
import '../assets/Componentcss/Header.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#">
            <img 
              src="https://www.tshwane.gov.za/wp-content/uploads/2017/05/contttttt-1.png" 
              alt="Tshwane Logo"
              className="logo-img"
            />
          </a>
        </div>
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#aboutUs">AboutUs</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#heritageSites">HeritageSites</a></li>
            <li><a href="#contactUs">ContactUs</a></li>
            <li><a href="#trailblazers">Trailblazers</a></li>
          </ul>
        </nav>
        <div className={`nav-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
