import React from "react";

const ProductCard = ({
  product,
  buttonText = "View More",
  buttonColor = "#007bff",
}) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button style={{ ...styles.button, backgroundColor: buttonColor }}>
        {buttonText}
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "10px",
    width: "200px",
    borderRadius: "5px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "contain",
    borderRadius: "5px",
  },
  button: {
    padding: "5px 10px",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
};

export default ProductCard;