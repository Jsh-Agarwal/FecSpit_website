import React from "react";
import "../style/Stats.css";

const Stats = () => (
 
  <div id="services" className="stats-and-initiatives">
  <div className="stats-section">
    <div className="stats-cards">
      <div className="stat-card">
        <h3 className="stat-value">50</h3>
        <p className="stat-label">Active Members</p>
      </div>
      <div className="stat-card">
        <h3 className="stat-value">20</h3>
        <p className="stat-label">Research Projects</p>
      </div>
      <div className="stat-card">
        <h3 className="stat-value">4</h3>
        <p className="stat-label">Corporate Reports</p>
      </div>
      <div className="stat-card">
        <h3 className="stat-value">10</h3>
        <p className="stat-label">Specialists in Demand</p>
      </div>
    </div>
  </div>

 </div>
);

export default Stats;
