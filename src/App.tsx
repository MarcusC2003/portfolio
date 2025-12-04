import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import "./App.css";

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
    </Router>
  );
};

export default App;
