import React from 'react';
import '../style/Reports.css';

const Reports = () => {
  const reports = [
    {
      title: "Annual Financial Report 2023",
      description: "Comprehensive analysis of financial performance, market trends, and strategic initiatives throughout the fiscal year.",
      pdfUrl: "/path-to-your-pdf-1.pdf"
    },
    {
      title: "Q4 Market Analysis",
      description: "Detailed examination of market conditions, competitor analysis, and future projections for the fourth quarter.",
      pdfUrl: "/path-to-your-pdf-2.pdf"
    },
    {
      title: "Sustainability Report",
      description: "Overview of environmental initiatives, social responsibility programs, and governance practices implemented.",
      pdfUrl: "/path-to-your-pdf-3.pdf"
    },
    {
      title: "Investment Strategy Guide",
      description: "Strategic framework for investment decisions, risk assessment, and portfolio management recommendations.",
      pdfUrl: "/path-to-your-pdf-4.pdf"
    },

    {
        title: "Investment Strategy Guide",
        description: "Strategic framework for investment decisions, risk assessment, and portfolio management recommendations.",
        pdfUrl: "/path-to-your-pdf-4.pdf"
      },
      {
        title: "Investment Strategy Guide",
        description: "Strategic framework for investment decisions, risk assessment, and portfolio management recommendations.",
        pdfUrl: "/path-to-your-pdf-4.pdf"
      },
      {
        title: "Investment Strategy Guide",
        description: "Strategic framework for investment decisions, risk assessment, and portfolio management recommendations.",
        pdfUrl: "/path-to-your-pdf-4.pdf"
      },
      {
        title: "Investment Strategy Guide",
        description: "Strategic framework for investment decisions, risk assessment, and portfolio management recommendations.",
        pdfUrl: "/path-to-your-pdf-4.pdf"
      },
      {
        title: "Investment Strategy Guide",
        description: "Strategic framework for investment decisions, risk assessment, and portfolio management recommendations.",
        pdfUrl: "/path-to-your-pdf-4.pdf"
      },

  ];

  const handleClick = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="reports-container">
      <h1 className="reports-title">Available Reports</h1>
      <div className="reports-grid">
        {reports.map((report, index) => (
          <div key={index} className="report-card">
            <h2 className="report-card-title">{report.title}</h2>
            <p className="report-card-description">{report.description}</p>
            <button
              onClick={() => handleClick(report.pdfUrl)}
              className="report-card-button"
            >
              Click Here...
            </button>
          </div>
        ))}
   

      </div>
      <h1 style={{marginLeft: "10rem" , marginTop: "7rem"}}>More Reports <span  style={{ color: "#D4AF37"}}>Coming Soon.</span> Stay Tuned</h1>
    </div>
    
  );
};

export default Reports;