import React, { useEffect } from "react";
import "../styles/pages/Home.css";
import Window from "../components/Window.tsx";

//images
import lightbulbOn from "../assets/images/home/lightbulb-on.png";
import goalPath from "../assets/images/home/Goal-Path.png";
import goalPin from "../assets/images/home/Goal-Pin.png";

import portfolioArrow from "../assets/images/home/Portfolio_Arrow.png";
import portfolioImage from "../assets/images/portfolio/asana-feature-design/Asana-Feature-Proposal-Poster.png";
import cardVolleyballImg from "../assets/images/home/Card-Volleyball.png";
import cardPlantsImg from "../assets/images/home/Card-IndoorPlants.png";
import cardPickleballImg from "../assets/images/home/Card-Pickleball.png";
import cardCookingImg from "../assets/images/home/Card-Cooking.png";
import handBaseImg from "../assets/images/home/Hand.png";
import handThumbImg from "../assets/images/home/Thumb.png";


const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <Window>
      <header className="intro">
        <div className="intro-content">
          <p className="intro-heading">Hi! my name is</p>

          <h1 className="intro-name">Marcus Chan</h1>

          <p className="intro-body">
            I'm currently studying Product Design and Web + App Development at
            SFU SIAT. I enjoy creating interfaces that users find interesting
            fun to interact with.
          </p>
        </div>
        <img
          className="lightbulb"
          src={lightbulbOn}
          alt="lightbulb vector drawing"
          width="268"
          height="404"
        />
      </header>

      <section className="goals-section">
        <div className="goals-grid">
          <img
            src={goalPath}
            alt="Pathways to a red goals flag"
            className="goals-path"
            width="570"
            height="769"
          />

          <div className="goals-card">
            <img src={goalPin} alt="push pin" className="goals-pin" />

            <h2 className="goals-title">My Future Goal</h2>

            <p className="goals-text">
              My long-term goal is to eventually move into a Product Design or
              Product Management role, but for now I’m keeping an open mind and
              exploring anything that helps me develop and expand my skillset.
            </p>
          </div>
        </div>
      </section>
      <section className="project-section">
        <div className="project-card">
          <h2 className="project-title">#recent_project</h2>

          {/* Project preview image */}
          <img
            src={portfolioImage}
            alt="Asana new feature proposal slide"
            className="project-image"
          />

          {/* Description */}
          <p className="project-description">
            In this project, my team carried out user research and developed
            mockups to propose a new feature for Asana.
          </p>

          {/* Tags */}
          <ul className="project-tags">
            <li className="project-tag">#ui</li>
            <li className="project-tag">#ux</li>
            <li className="project-tag">#user_research</li>
            <li className="project-tag">#figma</li>
          </ul>
        </div>

        {/* Right side “More projects” */}
        <div className="project-side">
          <div className="project-info-container">
            <p className="project-more-text">
              Check out more of my projects here
            </p>

            <img
              src={portfolioArrow}
              alt="arrow pointing to portfolio button"
              className="project-arrow"
            />

            <a href="#portfolio" className="project-portfolio-link">
              My Portfolio
            </a>
          </div>
        </div>
      </section>
      <section className="interests-section">
        <div className="interests-container">
          {/* left text card */}
          <div className="interests-text-card">
            <h2 className="interests-title">My Interests</h2>
            <p className="interests-text">
              When I’m not coding or designing, I like staying active and
              picking up new hobbies like volleyball, pickleball, indoor plants,
              and cooking.
            </p>
          </div>

          {/* right card fan */}
          <div className="interests-hand-wrapper">
            <div className="card-list">
              <img
                src={cardVolleyballImg}
                alt="Volleyball card"
                className="interest-card card-volleyball"
              />
              <img
                src={cardPlantsImg}
                alt="Indoor plants card"
                className="interest-card card-plants"
              />
              <img
                src={cardPickleballImg}
                alt="Pickleball card"
                className="interest-card card-pickleball"
              />
              <img
                src={cardCookingImg}
                alt="Cooking card"
                className="interest-card card-cooking"
              />
            </div>

            <img
              src={handBaseImg}
              alt="Hand holding cards"
              className="interests-hand-base"
            />
            <img
              src={handThumbImg}
              alt="Thumb"
              className="interests-hand-thumb"
            />
          </div>
        </div>
      </section>
    </Window>
  );
};

export default Home;
