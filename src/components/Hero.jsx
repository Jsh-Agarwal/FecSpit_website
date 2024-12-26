import React from 'react';
import "./Homepage.css";




const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            FINANCE AND ECONOMICS
            <br />
            CLUB OF SPIT
          </h1>
          <p className="hero-description">
            Join us in exploring the dynamic fields of finance and economics, where your insights and ideas can flourish. Together, we will delve into research, analysis, and discussions that empower our members to achieve academic and professional excellence. Through engaging workshops, collaborative projects, and thought-provoking debates, we aim to bridge the gap between theory and real-world application.
          </p>
          <a href="#services" className="cta-button">
            Check services
            <span className="arrow-icon">→</span>
          </a>
        </div>
      </div>
      <div className="image-section">
        <img
          src="/api/placeholder/400/300"
          alt="Notes representing finance"
          className="responsive-image"
        />
      </div>
      <div>
        <h2 className="stats-title">Empowering Minds, Shaping Futures.</h2>
      </div>
    </div>
  );
};

export default Hero;