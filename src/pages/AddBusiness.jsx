import { useState } from "react";

function AddBusiness() {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newBusiness = {
      name,
      category,
      city,
      rating: 4.0
    };

    console.log("New Business:", newBusiness);

    alert("Business submitted!");
  }

  return (
    <div className="container">

      <h1>Add Business</h1>

      <form className="form" onSubmit={handleSubmit}>

        <input
          placeholder="Business Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          placeholder="Category"
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        />

        <input
          placeholder="City"
          value={city}
          onChange={(e)=>setCity(e.target.value)}
        />

        <button className="button">
          Submit
        </button>

      </form>

    </div>
  );
}

export default AddBusiness;