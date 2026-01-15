import React from "react";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product, onRemove }) => {
  const outOfStock = !product.inStock;

  return (
    <div
      className={`${styles.card} ${
        outOfStock ? "outOfStockClass " + styles.outOfStockClass : ""
      }`}
    >
      <h2>{product.name}</h2>
      <h3>Price: {product.price}</h3>
      <h3>Availability: {outOfStock ? "Out of Stock" : "In Stock"}</h3>

      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;
