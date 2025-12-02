// src/pages/Portfolio.tsx
import React from "react";
import Window from "../components/Window";
import "../styles/pages/Portfolio.css";

import profilePic from "../assets/images/portfolio/Profile-Picture.png";
// import backArrow from "../assets/images/portfolio/Back-Arrow.png";
import asanaPoster from "../assets/images/portfolio/asana-feature-design/Asana-Feature-Proposal-Poster.png";

const Portfolio: React.FC = () => {
  return (
    <Window>
      <section className="case-page">
        {/* back arrow */}
        {/* <a
          href="#"
          className="case-back-link"
          onClick={(e) => {
            e.preventDefault();
            console.log("Back to portfolio");
          }}
        >
          <img
            src={backArrow}
            alt="Back to Portfolio"
            className="case-back-image"
          />
        </a> */}

        <div className="case-inner">
          {/* Header: avatar + name/date */}
          <header className="case-header">
            <img
              src={profilePic}
              alt="Marcus Chan"
              className="case-avatar"
            />

            <div className="case-author-meta">
              <p className="case-author-name">Marcus Chan</p>
              <p className="case-date">December 1, 2025</p>
            </div>
          </header>

          {/* Title + subtitle */}
          <h1 className="case-title">New Feature Proposal For Asana</h1>

          <p className="case-subtitle">
            Simon Fraser University IAT 334 – Group Project
          </p>

          {/* Tags */}
          <div className="case-tags">
            <span className="case-tag">#ui</span>
            <span className="case-tag">#ux</span>
            <span className="case-tag">#user_research</span>
            <span className="case-tag">#figma</span>
          </div>

          {/* Poster card */}
          <div className="case-hero-card">
            <img
              src={asanaPoster}
              alt="Asana New Feature Proposal"
              className="case-hero-image"
            />
          </div>
        </div>
      </section>
    </Window>
  );
};

export default Portfolio;
