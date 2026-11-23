import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  const handleAddToCart = (title) => {
    setCartCount((count) => count + 1);
    setLastAdded(title);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>CvSU Mini Store</h1>
        <p className="cart-message">
          {cartCount === 0
            ? "Your cart is empty."
            : `Items added to cart: ${cartCount} (Last added: ${lastAdded})`}
        </p>
      </header>

      <main className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            inStock={product.inStock}
            onAddToCart={handleAddToCart}
          >
            {product.id === 2 && <span>New</span>}
            {product.id === 4 && <span className="sale">Sale</span>}
          </ProductCard>
        ))}
      </main>
    </div>
  );
}

export default App;
