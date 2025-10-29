import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, handleAdd }) {
  const navigate = useNavigate();

  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10, width: 220 }}>
      <img
        src={product.image || "https://via.placeholder.com/100"}
        alt={product.name || product.title}
        width={100}
        height={100}
        onClick={() => navigate(`/product/${product.id}`)}
        style={{ cursor: "pointer", objectFit: "cover" }}
      />
      <h4>{product.name || product.title}</h4>
      <p>₹{product.price}</p>
      <button onClick={() => handleAdd(product.id)}>Add to Cart</button>
    </div>
  );
}




