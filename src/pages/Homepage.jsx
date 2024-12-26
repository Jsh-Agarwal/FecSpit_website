import { useEffect, useState } from "react";
import BannerImage from "../assets/image.png";
import MeetImage from "../assets/meet.jpg";
import NotesImage from "../assets/notes.jpeg"; // Import your image
import FECLogo from "../assets/Finance.png"
import "./Homepage.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const HomePage = () => {
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
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo-container">
          <img
            src={FECLogo}
            alt="FEC SPIT Logo"
            className="logo"
          />
        </div>
        <div className="nav-links">
          <a href="#services"  className="nav-link">
            Services
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#reviews" className="nav-link">
            Reviews
          </a>
          <a href="#contacts" className="nav-link">
            Contacts
          </a>
          <a href="#blog" className="nav-link">
            Blog
          </a>
          <a href="#reports" className="nav-link">
            Top Reports
          </a>
        </div>
      </nav>

      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              FINANCE AND ECONOMICS
              <br />
              CLUB OF SPIT
            </h1>
            <p className="hero-description">
              Join us in exploring the dynamic fields of finance and economics,
              where your insights and ideas can flourish. Together, we will
              delve into research, analysis, and discussions that empower our
              members to achieve academic and professional excellence. Through
              engaging workshops, collaborative projects, and thought-provoking
              debates, we aim to bridge the gap between theory and real-world
              application.
            </p>
            <a href="#services" className="cta-button">
              Check services
              <span className="arrow-icon">→</span>
            </a>
          </div>
        </div>
        <div className="image-section">
          <img
            src={NotesImage}
            alt="Notes representing finance"
            className="responsive-image"
          />
        </div>
        <div>
          {" "}
          <h2 className="stats-title">Empowering Minds, Shaping Futures.</h2>
        </div>
      </div>

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
      </div>

      <div class="finance-section">
        <div className="linkedin-section">
          <img
            src={MeetImage}
            alt="Finance background"
            className="background-image"
          />
          <div className="linkedin-content">
            <h2>CHECKOUT OUR LINKEDIN</h2>
            <p>
              We post our equity research, sectoral research, and economic
              analysis on our <br />
              LinkedIn
            </p>
            <a href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A104643513&keywords=FEC%20spit&origin=ENTITY_SEARCH_HOME_HISTORY&sid=*cv" className="learn-more">
              Learn more &rarr;
            </a>
          </div>
        </div>

        <div id="about"class="club-section">
          <h2>DISCOVER OUR CLUB</h2>
          <p>
            We are dedicated to fostering a community of financial and economic
            scholars.
          </p>
          <div class="yellow-line"></div>
          <div class="club-details">
            <p>
              At the Finance and Economics Club of SPIT, we are passionate about
              nurturing a culture of inquiry and excellence in finance and
              economics. Our dedicated team works closely with members to
              facilitate research opportunities, host engaging events, and
              provide resources that empower academic growth. From the initial
              interest to the culmination of research projects, we prioritize
              collaboration and innovation, ensuring that every member feels
              valued and supported.
            </p>
            <p>
              Whether you're looking to enhance your academic journey, network
              with like-minded individuals, or gain practical insights into the
              financial world, we are here to guide you. Experience the benefits
              of being part of a vibrant community focused on knowledge and
              achievement.
            </p>
          </div>
          <div class="white-line"></div>
          <p class="tagline">YOUR TRUSTED PARTNER IN FINANCE AND ECONOMICS</p>
        </div>

        <div className="banner-section">
          <img
            src={BannerImage}
            alt="Notes representing finance"
            className="responsive-image"
          />
        </div>
      </div>

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





      <footer id="contacts"className="footer">
      <div>  <h1 style={{ color: 'white', fontSize: '42px', textAlign: 'center', marginTop:'4rem', marginBottom: '2rem'}}>CONTACTS</h1>
            </div>
        
        <div className="footer-content">
          
          <div className="footer-section">
           


            <img
              src="src/assets/contacts.png"
              alt="Quote background"
              className="footer-image"
            />
            <h3>CONTACTS</h3>
            <p style={{  textAlign: 'center', marginLeft: '-1rem'}}>fec@spit.ac.in</p>
            <p style={{  textAlign: 'center', marginLeft: '-1rem'}}>+91 8169521107</p>
          </div>
          <div className="footer-section">
            <img
              src="src/assets/location.png"
              alt="Quote background"
              className="footer-image"
            />
            <h3 style={{  textAlign: 'center', marginLeft: '-1rem'}}>LOCATION</h3>
            <p>Sardar Patel Institute <br />of Technology</p>
            <p>Mumbai, India</p>
          </div>
          <div className="footer-section">
            <img
              src="src/assets/working-hours.png"
              alt="Quote background"
              className="footer-image"
            />
            <h3>WORKING HOURS</h3>
            <p style={{  textAlign: 'center', marginLeft: '-1rem'}}>Monday to Saturday</p>
            <p>10 am to 7 pm</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Services | About | Reviews | Contacts</p>
          <p className="footer-copyright">
            © All Rights Reserved. Finance and Economics Club of SPIT
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
