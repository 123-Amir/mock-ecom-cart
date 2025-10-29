const API_BASE = "http://localhost:5000/api";

// Get all products
export async function fetchProducts() {
  try {
    const res = await fetch(`${API_BASE}/products`);
    if (!res.ok) throw new Error("Failed to fetch products");
    return await res.json();
  } catch (err) {
    return [];
  }
}

// Fetch single product by id (client-side filtering)
export async function fetchProduct(id) {
  try {
    const res = await fetch(`${API_BASE}/products`);
    if (!res.ok) throw new Error("Failed to fetch product");
    const products = await res.json();
    // Supports both 'id' and 'productId' key
    return products.find(p => p.id === Number(id) || p.productId === Number(id));
  } catch (err) {
    return null;
  }
}

// Add to cart
export async function addToCart(productId, qty) {
  try {
    const res = await fetch(`${API_BASE}/cart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, qty })
    });
    if (!res.ok) throw new Error("Failed to add to cart");
    return await res.json();
  } catch (err) {
    return null;
  }
}

// Remove from cart
export async function removeFromCart(productId) {
  try {
    const res = await fetch(`${API_BASE}/cart/${productId}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to remove from cart");
    return await res.json();
  } catch (err) {
    return null;
  }
}

// Get cart
export async function fetchCart() {
  try {
    const res = await fetch(`${API_BASE}/cart`);
    if (!res.ok) throw new Error("Failed to fetch cart");
    return await res.json();
  } catch (err) {
    return { items: [], total: 0 };
  }
}

// Checkout
export async function checkout(cartItems) {
  try {
    const res = await fetch(`${API_BASE}/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartItems })
    });
    if (!res.ok) throw new Error("Checkout failed");
    return await res.json();
  } catch (err) {
    return null;
  }
}

