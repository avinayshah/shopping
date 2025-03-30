import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from backend
  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);


  return (
    <section style={styles.section}>
      <h2>Our Products</h2>
      <div style={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            buttonText="Add to Cart"
            buttonColor="#28a745"
          />
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: { padding: "20px", textAlign: "center" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
};

export default ProductList;
