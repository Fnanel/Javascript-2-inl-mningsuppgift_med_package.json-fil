
import { useContext, useState } from "react";
import { CartContext } from "../contex/CartContext";

export default function Checkout() {
  const { cartItems, totalPrice, setCartItems } = useContext(CartContext);
  const [feedback, setFeedback] = useState("");

  const handlePurchase = async () => {
    if (cartItems.length === 0) return setFeedback("Cart is empty.");

    try {
      const response = await fetch("https://js2-ecommerce-api.vercel.app/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify({
          products: cartItems.map(item => ({ product: item.id, quantity: item.quantity })),
        }),
      });

      if (response.ok) {
        setFeedback("Purchase successful!");
        setCartItems([]); 
      } else {
        setFeedback("Purchase failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setFeedback("An error occurred. Try again.");
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Price: {totalPrice} SEK</p>
      <button onClick={handlePurchase}>Complete Purchase</button>
      <p>{feedback}</p>
    </div>
  );
}
