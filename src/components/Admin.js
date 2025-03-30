import React, { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    axios.post("http://localhost:5000/products", { name, price, category, image })
      .then(() => {
        alert("Product added successfully!");
        setName(""); setPrice(""); setCategory(""); setImage("");
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Add Product</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
      <input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
      <input placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
      <button onClick={handleSubmit}>Add Product</button>
    </div>
  );
};

export default Admin;
