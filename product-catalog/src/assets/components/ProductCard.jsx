import "./ProductCard.css";

function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children,
}) {
  const formattedPrice = `₱${price.toLocaleString("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

  return (
    <div className={`product-card ${inStock ? "" : "out-of-stock"}`}>
      {children && <div className="badge-slot">{children}</div>}

      <span className="category">{category}</span>
      <h3 className="title">{title}</h3>
      <p className="price">{formattedPrice}</p>

      {inStock ? (
        <span className="stock-label in-stock">In Stock</span>
      ) : (
        <span className="stock-label no-stock">Out of Stock</span>
      )}

      <button
        className="add-btn"
        disabled={!inStock}
        onClick={() => onAddToCart(title)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
