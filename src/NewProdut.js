import { useEffect, useState } from "react";
import "./NewProduct.css"
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function NewProducts() {
      const { addToCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log("API Error:", err));
  }, []);

  return (
    <section className="new-products-section">
      <h2>New Arrivals</h2>

      <div className="products-grid">
        {products.length > 0 ? (
          products.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.image} alt={p.title} />
              <h3>{p.title.slice(0, 20)}...</h3>
              <p>${p.price}</p>
               <button onClick={() => addToCart(p)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </section>
  );
}