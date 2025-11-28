// src/App.tsx
import React, { useState } from "react";
import Navbar, { type TabId } from "./components/Navbar";

import "./pages/Home";
import "./App.css";
import Home from "./pages/Home";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>("home");

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
