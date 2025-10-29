import { useEffect, useState } from "react";
import { fetchCart, removeFromCart } from "../utils/api";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState({ items: [], total: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart().then(setCart);
  }, []);

  const handleRemove = (id) =>
    removeFromCart(id).then(setCart);

  return (
    <div>
      <h2>Your Cart</h2>
      {!cart.items.length && <div>Cart is Empty</div>}
      {cart.items.map(item => (
        <CartItem key={item.productId} item={item} handleRemove={handleRemove} />
      ))}
      <div style={{ margin: 10 }}>
        <b>Grand Total: ₹{cart.total}</b>
      </div>
      {cart.items.length ? (
        <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
      ) : null}
    </div>
  );
}
