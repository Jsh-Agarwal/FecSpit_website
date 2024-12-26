import React from 'react';
import "./Homepage.css";




const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/api/placeholder/80/80" alt="FEC SPIT Logo" className="logo" />
      </div>
      <div className="nav-links">
        <a href="#services" className="nav-link">Services</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#reviews" className="nav-link">Reviews</a>
        <a href="#contacts" className="nav-link">Contacts</a>
        <a href="#blog" className="nav-link">Blog</a>
        <a href="#reports" className="nav-link">Top Reports</a>
      </div>
    </nav>
  );
};

export default Navbar;