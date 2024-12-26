import React, { useState, useEffect } from "react";
import "../style/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aadhya Shetty",
      text: "The club has been instrumental in helping me navigate my academic path. With engaging workshops and collaborative research projects, I now feel equipped to tackle real-world financial challenges. It's been a fantastic experience!",
    },
    {
      id: 2,
      name: "Sandeep Menon",
      text: "Being a part of the club has truly transformed my academic experience. With insightful workshops and hands-on projects, I now feel more confident in tackling financial challenges. It’s been an invaluable journey!",
    },
    {
      id: 3,
      name: "Vanshika Rathi",
      text: "Joining the club has significantly enhanced my learning. The engaging workshops and collaborative research have equipped me to face real-world financial problems. It’s been an amazing experience!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
   
    <div id="reviews" className="testimonial-wrapper">
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-content">
          <h3 className="testimonial-name">
            {testimonials[activeIndex].name}
          </h3>
          <div className="testimonial-block">
            <div className="quote-background">
              <img
                src="src/assets/quotes-bg.png"
                alt="Quote background"
                className="quote-image"
              />
            </div>
            <p className="testimonial-text">
              {testimonials[activeIndex].text}
            </p>
          </div>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  </div>

  );
};

export default Testimonials;
