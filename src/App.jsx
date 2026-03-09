import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home";
import BusinessPage from "./pages/BusinessPage";
import About from "./pages/About";
import AddBusiness from "./pages/AddBusiness";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <nav className="nav">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/add-business">Add Business</Link>
          <Link to="/about">About</Link>
        </div>

        <button
          className="mode-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business/:id" element={<BusinessPage />} />
          <Route path="/add-business" element={<AddBusiness />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;