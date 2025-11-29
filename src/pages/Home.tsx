import React from "react";
import "../styles/pages/Home.css";
import Window from "../components/Window.tsx";

//images
import lightbulbOn from "../assets/images/home/lightbulb-on.png";
import goalPath from "../assets/images/home/Goal-Path.png";
import goalPin from "../assets/images/home/Goal-Pin.png";

// import buttonDrawing from "../assets/images/home/Button-Drawing.png";
import portfolioArrow from "../assets/images/home/Portfolio_Arrow.png";
import portfolioImage from "../assets/images/portfolio/asana-feature-design/Asana-Feature-Proposal-Poster.png";
import cardVolleyballImg from "../assets/images/home/Card-Volleyball.png";
import cardPlantsImg from "../assets/images/home/Card-IndoorPlants.png"; // Note: Check if this file ends in .png
import cardPickleballImg from "../assets/images/home/Card-Pickleball.png";
import cardCookingImg from "../assets/images/home/Card-Cooking.png";
import handBaseImg from "../assets/images/home/Hand.png";
import handThumbImg from "../assets/images/home/Thumb.png";




const Home: React.FC = () => {
  return (
    <Window >
    <header className="intro">
      <div className="intro-content">
        <p className="intro-heading">Hi! my name is</p>

        <h1 className="intro-name">Marcus Chan</h1>

        <p className="intro-body">
          I'm currently studying Product Design and Web + App Development
          at SFU SIAT. I enjoy creating interfaces that users find interesting 
          fun to interact with. 
        </p>
      </div>
      <img className="lightbulb" src={lightbulbOn} alt="lightbulb vector drawing" width="369" height="541" />
    </header>


    <section className="goals-section">
  <div className="goals-grid">
    <img
      src={goalPath} alt="Pathways to a red goals flag" className="goals-path" width='570' height='769'
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

    <a
      href="#portfolio"
      className="project-portfolio-link"
    >
      My Portfolio
    </a>
    </div>
  </div>

</section>
<section className="interests-section">
        
        {/* Top Left Text Box */}
        <div className="interests-intro-card">
          <h2 className="interests-heading">My Interests</h2>
          <p className="interests-body">
            When I'm not coding or designing, I staying active as well as picking up new hobbies.
          </p>
        </div>

        {/* Container for Hand and Cards */}
        <div className="hand-container">
          
          {/* LAYER 1 (Bottom): Main Hand Base */}
          <img src={handBaseImg} alt="" className="hand-base" />

          {/* LAYER 2 (Middle): The Cards Fan */}
          <div className="cards-fan">
              {/* Card 1: Volleyball */}
              <div className="interest-card-wrapper card-volleyball">
                <img src={cardVolleyballImg} alt="Volleyball interest card" className="card-img" />
              </div>

              {/* Card 2: Indoor Plants */}
              <div className="interest-card-wrapper card-plants">
                <img src={cardPlantsImg} alt="Indoor Plants interest card" className="card-img" />
              </div>

              {/* Card 3: Pickleball */}
              <div className="interest-card-wrapper card-pickleball">
                <img src={cardPickleballImg} alt="Pickleball interest card" className="card-img" />
              </div>

              {/* Card 4: Cooking */}
              <div className="interest-card-wrapper card-cooking">
                 <img src={cardCookingImg} alt="Cooking interest card" className="card-img" />
              </div>
          </div>

          {/* LAYER 3 (Top): The Thumb overlapping the cards */}
          <img src={handThumbImg} alt="Hand holding cards" className="hand-thumb" />

        </div>
      </section>

    </Window>
  );
};

export default Home;
