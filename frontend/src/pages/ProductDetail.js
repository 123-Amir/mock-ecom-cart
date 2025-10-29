import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProduct, addToCart } from "../utils/api";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    fetchProduct(id).then(setProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  // null/undefined checks for optional fields
  return (
    <div style={{ display: "flex", gap: 30, marginTop: 20 }}>
      {product.image && (
        <img src={product.image} alt={product.name || product.title} width={180} height={180} />
      )}
      <div>
        <h2>{product.name || product.title}</h2>
        {product.description && <p>{product.description}</p>}
        <div>Price: ₹{product.price}</div>
        <input
          type="number"
          min={1}
          max={10}
          value={qty}
          onChange={e => setQty(Number(e.target.value))}
          style={{ width: 40, marginRight: 10 }}
        />
        <button onClick={() => addToCart(product.id || product.productId, qty).then(() => alert("Added to cart!"))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
