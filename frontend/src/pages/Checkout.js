import { useState, useEffect } from "react";
import { fetchCart, checkout } from "../utils/api";

export default function Checkout() {
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [submitted, setSubmitted] = useState(false);
  const [receipt, setReceipt] = useState(null);

  useEffect(() => {
    fetchCart().then(setCart);
  }, []);

  const handleChange = (e) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(form.name && form.email && form.address && cart.items.length) {
      const res = await checkout(cart.items);
      setReceipt(res);
      setSubmitted(true);
    } else {
      alert("All fields required, and cart must not be empty");
    }
  };

  if(submitted && receipt) return (
    <div>
      <h2>Order Placed!</h2>
      <div>Total: ₹{receipt.total}</div>
      <div>Time: {receipt.timestamp}</div>
      <div>Thank you, {form.name}!</div>
    </div>
  );

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <b>Order summary:</b>
        <ul>
          {cart.items.map(i => <li key={i.productId}>{i.name} x {i.qty} = ₹{i.price * i.qty}</li>)}
        </ul>
        <div>Total: ₹{cart.total}</div>
      </div>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} /><br />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br />
        <textarea name="address" placeholder="Address" value={form.address} onChange={handleChange} /><br />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

