// src/pages/Home.tsx
import React from "react";
import "../styles/pages/Home.css";
import Window from "../components/Window.tsx";

//images
import lightbulbOn from "../assets/images/lightbulb-on.png";


const Home: React.FC = () => {
  return (
    <Window>
    <header className="intro">
      <div className="intro-content">
        <p className="intro-heading">Hi! my name is</p>

        <h1 className="intro-name">Marcus Chan</h1>

        <p className="intro-body">
          I'm currently studying Product Design and Web + App Development
          at SFU SIAT. I enjoy creating interactive, memorable experiences
          that make digital products both engaging and intuitive.
        </p>
      </div>
      <img className="lightbulb" src={lightbulbOn} alt="lightbulb vector drawing" width="369" height="541" />
    </header>
    <section id="goals-section" className="goals-section">
  <div className="goals-card">
    <h2 className="goals-heading">My Goals</h2>
    <p className="goals-body">
      My goal is to become a well-rounded designer and developer
    </p>
  </div>

  {/* squiggly bottom */}
  <div className="goals-wave">
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="goals-wave-svg"
    >
      <path
        d="M0,288 C80,256 160,224 240,224 C320,224 400,256 480,272 C560,288 640,288 720,272 C800,256 880,224 960,224 C1040,224 1120,256 1200,272 C1280,288 1360,288 1440,272 L1440,320 L0,320 Z"
        fill="#000000"
      />
    </svg>
  </div>
</section>
    </Window>
  );
};

export default Home;
