import { useState } from 'react';
import './css/Header.css';
import logo from '../assets/images/logo.png';

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="header">
      <div className="menu-logo-container">
        {/* Toggle button for sidebar */}
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <span
            className={`hamburger-icon ${isSidebarOpen ? 'open' : ''}`}
          ></span>
        </button>
        <div className="logo">
          <img src={logo} alt="gymbuddy logo" />
        </div>
      </div>

      {/* Sidebar navigation */}
      <nav className={`navigation ${isSidebarOpen ? 'show' : ''}`}>
        {/* Close button inside sidebar for mobile */}
        <button className="close-sidebar" onClick={toggleSidebar}>
          &times;
        </button>
        <a href="#features">Features</a>
        <a href="#about-us">About Us</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Download button */}
      <button className="download-button">
        Download <span className="star">★</span>
      </button>
    </header>
  );
};

export default Header;
