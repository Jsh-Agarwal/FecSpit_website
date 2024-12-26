import React from 'react';
import "./Homepage.css";



const Contact = () => {
  return (
    <div className="contact-container">
      <h1>GET IN TOUCH THROUGH FORM</h1>
      <div className="form-wrapper">
        <form className="contact-form">
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="What's your name?" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="What's your email address?" required />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" placeholder="What's your phone number?" />
            </div>
            <div className="input-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="What's the subject?" />
            </div>
          </div>
          <div className="input-group full-width">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Type your message.." />
          </div>
          <button type="submit" className="submit-btn">Send message</button>
        </form>
        <div className="social-links">
          <a href="#" className="social-link linkedin">in</a>
          <a href="#" className="social-link twitter">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;