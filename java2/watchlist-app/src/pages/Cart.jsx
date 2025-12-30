
import { useContext } from "react";
import { CartContext } from "../contex/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, totalItems, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  if (cartItems.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice} SEK</p>

      <ul>
        {cartItems.map((item) => (
          <li key={item.id} style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <img src={item.image} alt={item.name} style={{ width: "80px" }} />
            <span>{item.name} x {item.quantity}</span>
            <span>{item.price * item.quantity} SEK</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>


      <button
        onClick={() => navigate("/checkout")}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem", cursor: "pointer" }}
      >
        Go to Checkout
      </button>
    </div>
  );
}
