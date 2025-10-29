export default function CartItem({ item, handleRemove, handleQtyChange }) {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      {item.image && (
        <img src={item.image} alt={item.name} width={50} height={50} />
      )}
      <span>{item.name}</span>
      <span>₹{item.price}</span>
      <input
        type="number"
        min={1}
        max={10}
        value={item.qty}
        onChange={e => handleQtyChange(item.productId, Number(e.target.value))}
        style={{ width: 40 }}
      />
      <button onClick={() => handleRemove(item.productId)}>Remove</button>
    </div>
  );
}

