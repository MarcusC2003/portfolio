// src/pages/Home.tsx
import React from "react";
import "../styles/pages/Home.css";
import Window from "../components/Window.tsx";

//images
import lightbulbOn from "../assets/images/home/lightbulb-on.png";
import goalPath from "../assets/images/home/Goal-Path.png";
import goalPin from "../assets/images/home/Goal-Pin.png";



const Home: React.FC = () => {
  return (
    <Window>
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
    </Window>
  );
};

export default Home;
