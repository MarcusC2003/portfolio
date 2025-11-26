// src/App.tsx
import React, { useState } from "react";
import Navbar, { type TabId } from "./components/Navbar";

import "./pages/Home";
import "./styles/App.css";
import Home from "./pages/Home";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>("home");

  // const getWindowTitle = (tab: TabId) => {
  //   switch (tab) {
  //     case "about":
  //       return "About Me";
  //     case "resume":
  //       return "Resume";
  //     case "portfolio":
  //       return "Portfolio";
  //     case "contact":
  //       return "Contact";
  //     case "home":
  //     default: 
  //       return "Home";
  //   }
  // };

  return (
    <div className="app-root">
      {/* Big background name text */}
      <div className="background-text">
        <span className="background-text-line">MARCUS</span>
        <span className="background-text-line">CHAN</span>
      </div>

      {/* Window Layer */}
      <div className="window-layer">
        <Home />
      </div>

      {/* Bottom navbar */}
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
