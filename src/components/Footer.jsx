import React from "react";
import "../style/Footer.css";

const Footer = () => (
 
  <footer id="contacts"className="footer">
  <div>  <h1 style={{ color: 'white', fontSize: '42px', textAlign: 'center', marginTop:'4rem', marginBottom: '2rem'}}>CONTACTS</h1>
        </div>
    
    <div className="footer-content">
      
      <div className="footer-section">
       


        <img
          src="src/assets/contacts.png"
          alt="Quote background"
          className="footer-image"
        />
        <h3>CONTACTS</h3>
        <p style={{  textAlign: 'center', marginLeft: '-1rem'}}>fec@spit.ac.in</p>
        <p style={{  textAlign: 'center', marginLeft: '-1rem'}}>+91 8169521107</p>
      </div>
      <div className="footer-section">
        <img
          src="src/assets/location.png"
          alt="Quote background"
          className="footer-image"
        />
        <h3 style={{  textAlign: 'center', marginLeft: '-1rem'}}>LOCATION</h3>
        <p>Sardar Patel Institute <br />of Technology</p>
        <p>Mumbai, India</p>
      </div>
      <div className="footer-section">
        <img
          src="src/assets/working-hours.png"
          alt="Quote background"
          className="footer-image"
        />
        <h3>WORKING HOURS</h3>
        <p style={{  textAlign: 'center', marginLeft: '-1rem'}}>Monday to Saturday</p>
        <p>10 am to 7 pm</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>Services | About | Reviews | Contacts</p>
      <p className="footer-copyright">
        © All Rights Reserved. Finance and Economics Club of SPIT
      </p>
    </div>
  </footer>
);

export default Footer;
