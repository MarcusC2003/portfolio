// src/App.tsx
import React, { useState } from "react";
import Navbar, { type TabId } from "./components/Navbar";

import "./App.css";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>("home");

  return (
    <div className="app-root">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="background-text">
        <span className="background-text-line">MARCUS</span>
        <span className="background-text-line">CHAN</span>
      </div>

      <div className="window-layer">
        {activeTab === "home" && <Home />}
        {activeTab === "portfolio" && <Portfolio />}
      </div>
    </div>
  );
};

export default App;
