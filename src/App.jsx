import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import BusinessPage from "./pages/BusinessPage";
import About from "./pages/About";
import AddBusiness from "./pages/AddBusiness";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/add-business">Add Business</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business/:id" element={<BusinessPage />} />
        <Route path="/add-business" element={<AddBusiness />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;