import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function BusinessPage() {

  const { id } = useParams();
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    loadBusiness();
  }, []);

  async function loadBusiness() {

    const { data } = await supabase
      .from("businesses")
      .select("*")
      .eq("id", id)
      .single();

    setBusiness(data);

  }

  if (!business) return <p>Loading...</p>;

  return (

    <div className="business-page">

      <h1>{business.name}</h1>

      <p><b>Category:</b> {business.category}</p>

      <p><b>City:</b> {business.city}</p>

      <p><b>Rating:</b> ⭐ {business.rating}</p>

      <p className="description">
        {business.description || "No description added yet."}
      </p>

    </div>

  );
}

export default BusinessPage;