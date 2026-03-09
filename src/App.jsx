import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/home";
import BusinessPage from "./pages/BusinessPage";
import AddBusiness from "./pages/AddBusiness";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <div className={`app ${darkMode ? "dark" : "light"}`}>

        {/* NAVBAR */}
        <nav className="nav">
          <div>
            <Link to="/">Home</Link>
            <Link to="/AddBusiness">Submit Business</Link>
            <Link to="/about">About</Link>
            <Link to="/about">About</Link>
          </div>

          <button
            className="button"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>

        {/* MAIN CONTENT */}
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