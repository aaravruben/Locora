import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/home";
import BusinessPage from "./pages/BusinessPage";
import Submit from "./pages/Submit";

import "./App.css";

function App() {

  // Load saved mode from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "false" ? false : true;
  });

  // Save mode whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className={`app ${darkMode ? "dark" : "light"}`}>

        {/* NAVBAR */}
        <nav className="nav">

          <div className="logo">
            <Link to="/">BizWorld</Link>
          </div>

          <div className="nav-links">
            <Link to="/">Explore</Link>
            <Link to="/submit">Submit</Link>
          </div>

          <button
            className="button"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

        </nav>

        {/* PAGE CONTENT */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/business/:id" element={<BusinessPage />} />
            <Route path="/submit" element={<Submit />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;