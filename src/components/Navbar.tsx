// src/components/Navbar.tsx
import React from "react";
import "../styles/Navbar.css";

import aboutIcon from "../assets/icons/nav/about.png";
import resumeIcon from "../assets/icons/nav/resume.png";
import homeIcon from "../assets/icons/nav/home.png";
import portfolioIcon from "../assets/icons/nav/portfolio.png";
import emailIcon from "../assets/icons/nav/contact.png";

export type TabId = "about" | "resume" | "home" | "portfolio" | "contact";

type NavItem = {
  id: TabId;
  label: string;
  icon: string;
};

const navItems: NavItem[] = [
  { id: "about", label: "About", icon: aboutIcon },
  { id: "resume", label: "Resume", icon: resumeIcon },
  { id: "home", label: "Home", icon: homeIcon },
  { id: "portfolio", label: "Portfolio", icon: portfolioIcon },
  { id: "contact", label: "Contact", icon: emailIcon },
];

interface NavbarProps {
  activeTab: TabId;
  onTabChange: (id: TabId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="navbar">
      {navItems.map((item) => {
        const isActive = item.id === activeTab;

        return (
          <button
            key={item.id}
            type="button"
            className={`navbar__button ${isActive ? "navbar__button--active" : ""}`}
            onClick={() => onTabChange(item.id)}
          >
            <img
              src={item.icon}
              alt={item.label}
              className="navbar__icon"
            />
          </button>
        );
      })}
    </div>
  );
};

export default Navbar;
