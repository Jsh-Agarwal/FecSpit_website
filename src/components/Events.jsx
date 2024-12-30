// EventsPage.jsx
import React from 'react';
import '../style/Events.css';
import CallImage from "../assets/call.jpg";
import CaseImage from "../assets/case.jpg";
import NetworkImage from "../assets/network.jpg";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "CALL FOR ARTICLES",
      date: "January 15, 2025",
      description: "As part of Finance Conclave 2025, this Writing Event invites participants to showcase their analytical and writing skills by crafting insightful reports on trending finance, economics, and technology topics.",
      image: CallImage
    },
    {
      id: 2,
    title: "CASE STUDY COMPETITION",
      date: "February 28, 2025",
      description: "Introducing FinVision 2025, A premier case study competition, part of the highly anticipated Finance Conclave, bringing together the brightest minds from top colleges across India.",
      image: CaseImage
    },
    {
      id: 3,
      title: "NETWORKING EVENT",
      date: "March 15, 2025",
      description: `Get ready to connect, collaborate, and converse at the Finance Conclave 2024 Networking Event! This unique gathering brings together passionate finance enthusiasts, industryprofessionals, and student leaders from top colleges to engage in stimulating discussions on the latest trends in finance.Foster connections that could lead to future collaborations,internships, or mentorship opportunities.`,
      image: NetworkImage
    }
  ];

  return (
    <div className="events-container">
      <h1 className="events-title">Our Events</h1>
      
      <div className="events-list">
        {events.map((event, index) => (
          <div key={event.id} className={`event-card ${index % 2 === 0 ? 'event-left' : 'event-right'}`}>
            <div className="event-image-container">
              <img
                src={event.image}
                alt={event.title}
                className="event-image"
              />
            </div>
            
            <div className="event-content">
              <div className="event-date">{event.date}</div>
              <h2 className="event-title">{event.title}</h2>
              <p className="event-description">{event.description}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;