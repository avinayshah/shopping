import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => {
        const sortedProducts = res.data.slice(-5).reverse();
        setNewArrivals(sortedProducts);
      })
      .catch(err => console.error("Error fetching new arrivals:", err));
  }, []);


  return (
    <section style={styles.section}>
      <h2>Just In: New Arrivals</h2>
      <div style={styles.grid}>
        {newArrivals.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            buttonText="View More"
            buttonColor="#007bff"
          />
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: { padding: "20px", textAlign: "center" },
  grid: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};

export default NewArrivals;