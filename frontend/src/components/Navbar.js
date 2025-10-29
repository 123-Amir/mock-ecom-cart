import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCart } from "../utils/api";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetchCart().then(cart => setCartCount(cart.items.length));
  }, []);

  return (
    <nav style={{ display: "flex", gap: 20, marginBottom: 20, background: "#1976D2", padding: "8px 20px", color: "white" }}>
      <Link style={{ color: "white", textDecoration: "none", fontWeight: "bold" }} to="/">Home</Link>
      <Link style={{ color: "white", textDecoration: "none", fontWeight: "bold" }} to="/cart">Cart ({cartCount})</Link>
      <Link style={{ color: "white", textDecoration: "none", fontWeight: "bold" }} to="/checkout">Checkout</Link>
    </nav>
  );
}



