const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Products with images!
const products = [
  { id: 1, name: "T-shirt", price: 499, image: "https://dummyimage.com/120x120/cccccc/000000&text=T-shirt" },
  { id: 2, name: "Sneakers", price: 1499, image: "https://dummyimage.com/120x120/cccccc/000000&text=Sneakers" },
  { id: 3, name: "Jeans", price: 999, image: "https://dummyimage.com/120x120/cccccc/000000&text=Jeans" },
  { id: 4, name: "Cap", price: 299, image: "https://dummyimage.com/120x120/cccccc/000000&text=Cap" },
  { id: 5, name: "Jacket", price: 1599, image: "https://dummyimage.com/120x120/cccccc/000000&text=Jacket" }
];



let cart = [];

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Add to cart
app.post('/api/cart', (req, res) => {
  const { productId, qty } = req.body;
  const product = products.find(p => p.id === productId);
  if (!product) return res.status(404).json({ error: "Product not found" });
  let existing = cart.find(item => item.productId === productId);
  if (existing) existing.qty = qty; // Directly update qty, not add
  else cart.push({
    productId,
    name: product.name,
    price: product.price,
    qty,
    image: product.image // image added to cart object
  });
  res.json(cart);
});

// Remove from cart
app.delete('/api/cart/:id', (req, res) => {
  const id = Number(req.params.id);
  cart = cart.filter(item => item.productId !== id);
  res.json(cart);
});

// Get cart + total
app.get('/api/cart', (req, res) => {
  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  res.json({ items: cart, total });
});

// Checkout (mock)
app.post('/api/checkout', (req, res) => {
  const { cartItems } = req.body;
  const total = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);
  res.json({ total, timestamp: new Date().toISOString() });
  cart = [];
});

app.listen(5000, () => console.log('Server running on port 5000'));
