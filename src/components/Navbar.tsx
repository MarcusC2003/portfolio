// src/components/Navbar.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

import homeIcon from "../assets/icons/nav/home.png";
import portfolioIcon from "../assets/icons/nav/portfolio.png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `navbar-button ${isActive ? "navbar-button-active" : ""}`
        }
      >
        <img src={homeIcon} alt="Home" className="navbar-icon" />
      </NavLink>

      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          `navbar-button ${isActive ? "navbar-button-active" : ""}`
        }
      >
        <img src={portfolioIcon} alt="Portfolio" className="navbar-icon" />
      </NavLink>

    </nav>
  );
};

export default Navbar;
