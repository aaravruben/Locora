import { useState } from "react";
import { supabase } from "../supabaseClient";

function AddBusiness() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("businesses")
      .insert([
        {
          name: name,
          category: category,
          address: address,
          city: city,
          rating: rating ? Number(rating) : null
        }
      ]);

    if (error) {
      console.error(error);
      alert("Error adding business");
    } else {
      alert("Business added!");

      setName("");
      setCategory("");
      setAddress("");
      setCity("");
      setRating("");
    }
  };

  return (
    <div>
      <h1>Add Business</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Business Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <br />

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <br />

        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <br />

        <input
          type="number"
          step="0.1"
          min="0"
          max="5"
          placeholder="Rating (0-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <br />

        <button type="submit">Add Business</button>

      </form>
    </div>
  );
}

export default AddBusiness;