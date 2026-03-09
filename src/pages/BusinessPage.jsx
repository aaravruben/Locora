import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function BusinessPage() {
  const { id } = useParams();

  const [business, setBusiness] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchBusiness();
  }, []);

  async function fetchBusiness() {
    const { data, error } = await supabase
      .from("businesses")
      .select("*")
      .eq("id", id)
      .single();

    if (!error) {
      setBusiness(data);
      setDescription(data.description || "");
    }
  }

  async function saveDescription() {
    const { error } = await supabase
      .from("businesses")
      .update({ description: description })
      .eq("id", id);

    if (error) {
      alert("Error saving description");
    } else {
      alert("Description saved!");
    }
  }

  if (!business) return <p>Loading...</p>;

  return (
    <div>
      <h1>{business.name}</h1>

      <p>Category: {business.category}</p>
      <p>City: {business.city}</p>
      <p>Rating: {business.rating}</p>

      <h2>Description</h2>

      <textarea
        rows="6"
        cols="50"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />

      <button onClick={saveDescription}>
        Save Description
      </button>
    </div>
  );
}

export default BusinessPage;