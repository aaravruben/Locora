import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/home";
import BusinessPage from "./pages/BusinessPage";
import Submit from "./pages/Submit";

import "./App.css";

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "false" ? false : true;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);

    if (darkMode) {
      document.body.className = "dark";
    } else {
      document.body.className = "light";
    }
  }, [darkMode]);

  return (
    <Router>

      <nav className="nav">

        <div className="nav-left">
          <Link to="/" className="logo">Home</Link>
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

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business/:id" element={<BusinessPage />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;