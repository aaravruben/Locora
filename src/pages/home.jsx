import { useState } from "react";
import { Link } from "react-router-dom";
import { businesses } from "../data/businesses";

function Home() {
  const [search, setSearch] = useState("");

  const filtered = businesses.filter((biz) =>
    biz.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>Bay Area Business Hub</h1>

      <input
        className="search"
        placeholder="Search businesses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="business-grid">
        {filtered.map((biz) => (
          <Link key={biz.id} to={`/business/${biz.id}`}>
            <div className="card">

              <h3>{biz.name}</h3>

              <p>{biz.category}</p>

              <span>{biz.city}</span>

              <p className="rating">⭐ {biz.rating}</p>

            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}

export default Home;