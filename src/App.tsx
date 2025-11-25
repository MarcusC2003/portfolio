// src/App.tsx
import React, { useState } from "react";
import Navbar, { type TabId } from "./components/Navbar";
import Window from "./components/Window";           // <-- using your real Window component
import "./styles/App.css";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>("home");

  const getWindowTitle = (tab: TabId) => {
    switch (tab) {
      case "about":
        return "About Me";
      case "resume":
        return "Resume";
      case "portfolio":
        return "Portfolio";
      case "contact":
        return "Contact";
      case "home":
      default:
        return "Home";
    }
  };

  return (
    <div className="app-root">
      {/* Big background name text */}
      <div className="background-text">
        <span className="background-text__line">MARCUS</span>
        <span className="background-text__line background-text__line--offset">
          CHAN
        </span>
      </div>

      {/* Window Layer */}
      <div className="window-layer">
        <Window title={getWindowTitle(activeTab)}>
          {activeTab === "home" && (
            <h1 style={{ fontSize: "2rem", margin: 0 }}>home</h1>
          )}

          {activeTab === "about" && (
            <p>About page content goes here.</p>
          )}

          {activeTab === "resume" && (
            <p>Resume page content goes here.</p>
          )}

          {activeTab === "portfolio" && (
            <p>Portfolio page content goes here.</p>
          )}

          {activeTab === "contact" && (
            <p>Contact page content goes here.</p>
          )}
        </Window>
      </div>

      {/* Bottom navbar */}
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
