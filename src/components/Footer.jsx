import React from 'react';
import "./Homepage.css";



const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-title">
          <h2>CONTACTS</h2>
        </div>
        <div className="footer-details">
          <div className="footer-item">
            <span className="footer-icon">📱</span>
            <h3>CONTACTS</h3>
            <p>fec@spit.ac.in</p>
            <p>+91 8169521107</p>
          </div>
          <div className="footer-item">
            <span className="footer-icon">📍</span>
            <h3>LOCATION</h3>
            <p>Sardar Patel Institute of Technology</p>
            <p>Mumbai, India</p>
          </div>
          <div className="footer-item">
            <span className="footer-icon">⏰</span>
            <h3>WORKING HOURS</h3>
            <p>Monday to Saturday</p>
            <p>10 am to 7 pm</p>
          </div>
        </div>
        <div className="footer-bottom">
          <ul className="footer-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
            <a href="#contacts">Contacts</a>
          </ul>
          <p>© All Rights Reserved. Finance and Economics Club of SPIT</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;