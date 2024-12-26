import React from "react";
import "../style/Services.css";

const Services = () => (
  <div  className="initiatives-section">
  <h2 className="initiatives-title">
    Research Initiatives We Undertake
  </h2>
  <p className="initiatives-description">
    From theoretical frameworks to practical applications, we engage in
    comprehensive research to enhance our understanding of finance and
    economics.
  </p>
  <div className="initiatives-cards">
    <div className="initiative-card">
      <h3 className="initiative-title">Equity Research</h3>
      <p className="initiative-description">
        Our Equity Research initiative focuses on analyzing market
        trends and company performances, providing insightful reports
        that aid in investment decision-making. We equip our members
        with the necessary tools to navigate the financial landscape
        effectively.
      </p>
      <a href="#contact" className="initiative-link">
        Contact &rarr;
      </a>
    </div>
    <div className="initiative-card">
      <h3 className="initiative-title">Finance Workshops</h3>
      <p className="initiative-description">
        Participate in our Finance Workshops, where we break down
        complex financial concepts into digestible sessions. Our
        experienced facilitators guide discussions on topics like
        investment strategies, risk management, and financial planning,
        ensuring a well-rounded education.
      </p>
      <a href="#contact" className="initiative-link">
        Contact &rarr;
      </a>
    </div>
    <div className="initiative-card">
      <h3 className="initiative-title">Economic Analysis</h3>
      <p className="initiative-description">
        Dive into Economic Analysis with our team, as we explore
        macroeconomic indicators and their impact on global markets. Our
        collaborative approach fosters a deeper understanding of
        economic theories and their real-world applications.
      </p>
      <a href="#contact" className="initiative-link">
        Contact &rarr;
      </a>
    </div>
  </div>
</div>

);

export default Services;
