import React from "react";
import "../style/Linkedin.css";
import BannerImage from "../assets/image.png";
import MeetImage from "../assets/meet.jpg";

const Linkedin = () => (
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
  
);

export default Linkedin;
