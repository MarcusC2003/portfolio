// src/pages/Portfolio.tsx
import React from "react";
import Window from "../components/Window";
import "../styles/pages/Portfolio.css";

import profilePic from "../assets/images/portfolio/Profile-Picture.png";
// import backArrow from "../assets/images/portfolio/Back-Arrow.png";

//portfolio images
import asanaPoster from "../assets/images/portfolio/asana-feature-design/Asana-Feature-Proposal-Poster.png";
// import Brainstorm from "../assets/images/portfolio/asana-feature-design/Brainstorm.png";
import Persona from "../assets/images/portfolio/asana-feature-design/Persona.png";
import Feature from "../assets/images/portfolio/asana-feature-design/Feature.png";

const Portfolio: React.FC = () => {
  return (
    <Window contentClassName="portfolio-window-content">
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
          <header className="case-header">
            {/* avatar + name/date row */}
            <div className="case-header-top">
              <img
                src={profilePic}
                alt="profile picture of me"
                className="case-avatar"
              />

              <div className="case-author-meta">
                <p className="case-author-name">Marcus Chan</p>
                <p className="case-date">December 1, 2025</p>
              </div>
            </div>

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
          </header>
          <section className="content-section">
            <div className="case-content">
              <h2 className="content-heading">Introduction & Goal</h2>
              <p className="content-paragraph">
                This group project focused on designing a new feature for Asana.
                Our goal was to understand user pain points and propose a
                solution that would support task management more effectively for
                beginner and intermediate users.
              </p>

              <h2 className="content-heading">Process & Experience</h2>
              <p className="content-paragraph">
                We began with user research to identify workflow gaps and common
                frustrations. I created and distributed a survey to guide our
                interview plan, then conducted task-based interviews to observe
                how users navigated Asana and why they made certain choices.
                During these sessions, we asked participants to create a project
                of their choice and talk through their thought process, which
                gave us unbiased insight into their natural workflow. I
                consolidated our findings into three personas: a primary user, a
                secondary user, and a stakeholder.
              </p>
              <figure className="content-figure">
                <img
                  src={Persona}
                  alt="Asana User Persona"
                  className="content-image"
                />
                <figcaption className="content-figcaption">
                  One of the user personas I created based on our research
                </figcaption>
              </figure>
              <p className="content-paragraph">
                In the next stage, our team pitched three feature concepts
                grounded in our research. For my assigned concept, I defined the
                user needs it addressed and explored how it could fit naturally
                within Asana’s existing interaction patterns. I designed the
                initial wire flow for this feature in Figma.
              </p>
              <figure className="content-figure">
                <img
                  src={Feature}
                  alt="My Asana Feature Concept"
                  className="content-image"
                />
                <figcaption className="content-figcaption">
                  My feature concept wireflow addressing user needs
                </figcaption>
              </figure>
              <p className="content-paragraph">
                For the final deliverable, we produced a full visual mockup. We
                ultimately chose to design a Guides Page feature, as many
                beginner and intermediate users were unaware of Asana’s existing
                capabilities, which often led them to switch to other platforms.
                A key element of this feature is the option for users to add
                tools or functions to a project through a guided tutorial,
                reducing the cognitive load of remembering multiple steps. My
                responsibilities included refining the feature, writing problem
                statements, outlining usage cases, designing the Guides Page
                screens, and structuring the slide deck.
              </p>

              <h2 className="content-heading">Outcome</h2>
              <p className="content-paragraph">
                {" "}
                This project strengthened my skills in UX research, data
                synthesis, and interaction design. My biggest takeaway was
                learning how to delegate effectively based on team strengths and
                present with confidence.
              </p>
            </div>
          </section>
        </div>
      </section>
    </Window>
  );
};

export default Portfolio;
