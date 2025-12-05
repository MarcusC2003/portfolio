import React from "react";
import Window from "../components/Window";
import "../styles/pages/Contact.css";

import profilePic from "../assets/images/portfolio/Profile-Picture.png";
import emailIcon from "../assets/icons/nav/contact.png";
import linkedinIcon from "../assets/icons/contact/linkedin.png";

const Contact: React.FC = () => {
  return (
    <Window>
      <section className="contact-page">
        <div className="contact-inner">
          <div className="contact-profile-wrapper">
            <img
              src={profilePic}
              alt="Picture of Marcus Chan"
              className="contact-profile-img"
            />
          </div>

          <div className="contact-content">
            <h1 className="contact-title">Let's Get In Touch!</h1>

            <p className="contact-subtitle">
              Contact me through the following links
            </p>

            <div className="contact-buttons">
              <a
                href="mailto:amarcusgchan@gmail.com"
                className="contact-button contact-button-email"
              >
                <span className="contact-button-icon">
                  <img src={emailIcon} alt="Email icon" />
                </span>
                <span className="contact-button-label">marcusgchan@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/marcus-chan-275889360"
                target="_blank"
                rel="noreferrer"
                className="contact-button contact-button-linkedin"
              >
                <span className="contact-button-icon">
                  <img src={linkedinIcon} alt="LinkedIn icon" />
                </span>
                <span className="contact-button-label">linkedin</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Window>
  );
};

export default Contact;
