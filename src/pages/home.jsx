import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";

function Home() {
  const [businesses, setBusinesses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBusinesses();
  }, []);

  async function fetchBusinesses() {
  setLoading(true);

  const { data } = await supabase
    .from("businesses")
    .select("*")
    .order("rating", { ascending: false });

  setBusinesses(data || []);
  setLoading(false);
}

  const filtered = businesses.filter((biz) =>
    biz?.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
     <div className="hero">
  <h1>Discover Local Businesses</h1>

  <p className="hero-sub">
    Explore cafes, tech stores, and hidden gems in your area.
  </p>

  <input
    className="search"
    placeholder="Search businesses..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>
  {loading && <p className="loading">Loading businesses...</p>}
      <div className="business-grid">
        {filtered.map((biz) => (
          <Link
  key={biz.id}
  to={`/business/${biz.id}`}
  className="card"
>

  <div className="card-header">
    <h3>{biz.name}</h3>
    <span className="rating">⭐ {biz.rating}</span>
  </div>

  <p className="category">{biz.category}</p>

  <span className="city">{biz.city}</span>

</Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
