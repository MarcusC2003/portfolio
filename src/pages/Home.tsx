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


    <section className="goals-section">
      
  <div className="goals-card">
    <h1 className="goals-title">My Goals</h1>
    <p className="goals-text">BLAH ABLH BLAH</p>
  </div>

  {/* used AI to generate wave */}
   <div className="goals-wave">
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="goals-wave-svg"
    >
      <path
    d="
      M0 256 
      C 80 300, 160 300, 240 256
      S 400 212, 480 256
      S 640 300, 720 256
      S 880 212, 960 256
      S 1120 300, 1200 256
      S 1360 212, 1440 256
      V 320 H 0 Z
    "
    fill="#000000"
  />
    </svg>
  </div>
</section>
    </Window>
  );
};

export default Home;
