
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contex/CartContext";

function Header() {
  const { totalItems } = useContext(CartContext);

  return (
    <header>
      <h1>My Watchlist</h1>
      <nav>
        <ul style={{ display: "flex", gap: "2rem" }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/cart">Cart ({totalItems})</Link></li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
