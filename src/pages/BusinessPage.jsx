import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const businesses = [
  { id: 1, name: "Golden Gate Coffee", description: "Popular cafe in SF." },
  { id: 2, name: "Bay Tech Repair", description: "Fix phones and laptops." },
  { id: 3, name: "Silicon Sushi", description: "Modern sushi restaurant." },
];

function BusinessPage() {
  const { id } = useParams();
  const business = businesses.find((b) => b.id === Number(id));

  if (!business) return <h2>Business not found</h2>;

  return (
    <div className="container">
      <h1>{business.name}</h1>
      <p>{business.description}</p>
    </div>
  );
}
<Link className="button" to="/">← Back to businesses</Link>

export default BusinessPage;