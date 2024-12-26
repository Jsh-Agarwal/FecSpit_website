import React from "react";
import "../style/Contactform.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const ContactForm = () => (
  <div class="contact-container">
  <h1>GET IN TOUCH THROUGH FORM</h1>
  
  <div class="form-wrapper">
      <form class="contact-form">
          <div class="input-row">
              <div class="input-group">
                  <label for="name">Name</label>
                  <input type="text" id="name" placeholder="What's your name?" required />
                 
              </div>
              
              <div class="input-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" placeholder="What's your email address?" required />
               
              </div>
          </div>

          <div class="input-row">
              <div class="input-group">
                  <label for="phone">Phone</label>
                  <input type="tel" id="phone" placeholder="What's your phone number?" />
              </div>
              
              <div class="input-group">
                  <label for="subject">Subject</label>
                  <input type="text" id="subject" placeholder="What's the subject?" />
              </div>
          </div>

          <div class="input-group full-width">
              <label for="message">Message</label>
              <textarea id="message" placeholder="Type your message.."></textarea>
          </div>

          <button type="submit" class="submit-btn">Send message</button>
      </form>



      <div class="social-links"> 
<a 
  href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A104643513&keywords=FEC%20spit&origin=ENTITY_SEARCH_HOME_HISTORY&sid=*cv" 
  className="social-link linkedin" 
  style={{ fontSize: '30px', marginLeft: '15px', color:'white'}}
>
  in
</a>
<i 
className="fab fa-instagram" 
style={{ fontSize: '30px', marginLeft: '19px' }}
>
<a href="https://www.instagram.com/fec_spit/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}></a>
</i>


          <a href="#" class="social-link twitter" style={{ fontSize: '30px', marginLeft: '14px' }}>
              <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
              </svg>
          </a>
      </div>
  </div>
</div>


);

export default ContactForm;
