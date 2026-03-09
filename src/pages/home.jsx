import { Link } from "react-router-dom";

const businesses = [
  { id: 1, name: "Golden Gate Coffee", category: "Cafe", city: "San Francisco" },
  { id: 2, name: "Bay Tech Repair", category: "Electronics", city: "Oakland" },
  { id: 3, name: "Silicon Sushi", category: "Restaurant", city: "San Jose" },
];

function Home() {
  return (
    <div className="container">
      <h1>Bay Area Business Hub</h1>

      <div className="business-grid">
        {businesses.map((biz) => (
          <Link key={biz.id} to={`/business/${biz.id}`}>
            <div className="card">
              <h3>{biz.name}</h3>
              <p>{biz.category}</p>
              <span>{biz.city}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;