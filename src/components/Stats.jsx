import React from 'react';
import "./Homepage.css";




const StatCard = ({ value, label }) => (
  <div className="stat-card">
    <h3 className="stat-value">{value}</h3>
    <p className="stat-label">{label}</p>
  </div>
);

const Stats = () => {
  const stats = [
    { value: 50, label: "Active Members" },
    { value: 20, label: "Research Projects" },
    { value: 4, label: "Corporate Reports" },
    { value: 10, label: "Specialists in Demand" }
  ];

  return (
    <div className="stats-section">
      <div className="stats-cards">
        {stats.map((stat, index) => (
          <StatCard key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </div>
  );
};

export default Stats;