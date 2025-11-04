import { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Cart.css"

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className="cart-page">
      <h2>Your Cart 🛒</h2>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div>
            <h3>{item.title.slice(0, 20)}...</h3>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <h3 className="total">Total: ${total.toFixed(2)}</h3>
      )}
    </section>
  );
}