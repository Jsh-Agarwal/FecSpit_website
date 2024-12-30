import React from "react";
import "../style/Navbar.css";
import "../style/Index.css";
import { Link } from "react-router-dom";
import FECLogo from "../assets/Finance.png";

const Navbar = () => (
  <nav className="navbar">
      <Link to="/" className="logo-container">
      <img src={FECLogo} alt="FEC SPIT Logo" className="logo" />
    </Link>
    <div className="nav-links">
      <a href="#services" className="nav-link">Services</a>
     
      <a href="#reviews" className="nav-link">Reviews</a>
      <a href="#contacts" className="nav-link">Contacts</a>
       <Link to="/events" className="nav-link">Events</Link>
      <a href="#blog" className="nav-link">Blog</a>
      <Link to="/reports" className="nav-link">Top Reports</Link>
    </div>
  </nav>
);

export default Navbar;
