import { useEffect, useState } from "react";
import { fetchProducts, addToCart } from "../utils/api";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const filtered = products.filter(
    p => (p.name || p.title).toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = (id) => {
    addToCart(id, 1).then(() => alert("Added to cart!"));
  };

  return (
    <div>
      <h2>Products</h2>
      <input
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ margin: "10px", padding: "6px", width: "180px" }}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {filtered.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              handleAdd={handleAdd}
            />
          ))}
        </div>
      )}
    </div>
  );
}

