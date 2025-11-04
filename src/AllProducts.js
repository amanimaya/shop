import { useEffect, useState, useContext } from "react";
import { CartContext } from "./CartContext";
import "./AllProducts.css";

export default function AllProducts() {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => console.log("API Error:", err));
  }, []);

  return (
    <section className="all-products">
      <h2> All Products</h2>

      {loading ? (
        <p className="loading">Loading products...</p>
      ) : (
        <div className="products-grid">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.image} alt={p.title} />
              <h3>{p.title.slice(0, 18)}...</h3>
              <p className="price">${p.price}</p>
              <button onClick={() => addToCart(p)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}