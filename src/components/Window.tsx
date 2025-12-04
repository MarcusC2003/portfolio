// src/components/Window.tsx
import React from "react";
import "../styles/Window.css";

import Navbar from "../components/Navbar";

interface WindowProps {
  children: React.ReactNode;
  contentClassName?: string;
}

const Window: React.FC<WindowProps> = ({ children, contentClassName }) => {
  return (
    <div className="window-container">
      <Navbar />

      <div className="background-text">
        <span className="background-text-line">MARCUS</span>
        <span className="background-text-line">CHAN</span>
      </div>

      <div className="window-layer">
        <div className="window">
          <div className="window-topbar">
            <div className="window-controls">
              <span className="window-dot window-dot-close" />
              <span className="window-dot window-dot-maximize" />
              <span className="window-dot window-dot-minimize" />
            </div>
          </div>

          <div className={`window-content ${contentClassName || ""}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Window;
