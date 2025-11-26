import React from "react";
import "../styles/Window.css";

interface WindowProps {
  children: React.ReactNode;
  title?: string;
}

const Window: React.FC<WindowProps> = ({ children, title }) => {
  return (
    <div className="window">
      <div className="window-topbar">
        <div className="window-controls">
          <span className="window-dot window-dot-close" />
          <span className="window-dot window-dot-maximize" />
          <span className="window-dot window-dot-minimize" />
        </div>
        {/* {title && <span className="window-title">{title}</span>} */}
      </div>

      <div className="window-content">{children}</div>
    </div>
  );
};

export default Window;
