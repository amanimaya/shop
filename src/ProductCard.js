import React, { useState } from "react";

export default function ProductCard({ product, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    onAddToCart(product); // send product to cart page
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-img" />

      <h4 className="product-name">{product.title.substring(0, 35)}...</h4>

      <p className="product-price">${product.price}</p>

      <button className="add-btn" onClick={handleAdd}>
        {added ? "✅ Added!" : "Add to Cart"}
      </button>
    </div>
  );
}