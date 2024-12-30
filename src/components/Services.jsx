import React from "react";
import "../style/Services.css";
import EquityImage from "../assets/equity.jpg";
import EconomicImage from "../assets/economic.jpg";
import WorkshopImage from "../assets/workshop.jpg";



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
  <div class="initiative-card">
  <div class="card-image">
    <img src={EquityImage} alt="Market Graph" class="market-graph"></img>
  </div>
  
  <div class="card-content">
    <h3 class="card-title">Equity Research</h3>
    
    <p class="card-description">
      Our Equity Research initiative focuses on analyzing market
      trends and company performances, providing insightful reports
      that aid in investment decision-making. We equip our members
      with the necessary tools to navigate the financial landscape
      effectively.
    </p>
    
    <div class="card-divider"></div>
    
    <a href="#contact" class="card-link">
      Contact →
    </a>
  </div>
</div>


<div class="initiative-card">
  <div class="card-image">
    <img src={WorkshopImage } alt="Market Graph" class="market-graph"></img>
  </div>
  
  <div class="card-content">
    <h3 class="card-title">Finance Workshops</h3>
    
    <p class="card-description">
    Participate in our Finance Workshops, where we break down
        complex financial concepts into digestible sessions. Our
        experienced facilitators guide discussions on topics like
        investment strategies, risk management, and financial planning,
        ensuring a well-rounded education.
    </p>
    
    <div class="card-divider"></div>
    
    <a href="#contact" class="card-link">
      Contact →
    </a>
  </div>
</div>




<div class="initiative-card">
  <div class="card-image">
    <img src={EconomicImage} alt="Market Graph" class="market-graph"></img>
  </div>
  
  <div class="card-content">
    <h3 class="card-title">Economic Analysis</h3>
    
    <p class="card-description">
    Dive into Economic Analysis with our team, as we explore
        macroeconomic indicators and their impact on global markets. Our
        collaborative approach fosters a deeper understanding of
        economic theories and their real-world applications.
    </p>
    
    <div class="card-divider"></div>
    
    <a href="#contact" class="card-link">
      Contact →
    </a>
  </div>
</div>


  </div>
</div>

);

export default Services;
