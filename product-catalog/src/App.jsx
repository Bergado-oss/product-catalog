import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import products from "./data/products";
import "./App.css";

function App() {
 
  const [cart, setCart] = useState([]);
  const [cartMessage, setCartMessage] = useState("");

  // Lab 4 state
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);
    return () => clearTimeout(timer); // cleanup
  }, [searchText]);

  // Derived list (calculated during render, not stored in state)
  const keyword = debouncedSearch.trim().toLowerCase();
  const filteredProducts = products
    .filter((p) => p.title.toLowerCase().includes(keyword))
    .filter((p) => category === "All" || p.category === category);

  const displayedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "price-asc") return a.price - b.price;
    if (sortOrder === "price-desc") return b.price - a.price;
    return 0;
  });

  // Update tab title when the number of results changes
  useEffect(() => {
    document.title = `CvSU Mini Store (${displayedProducts.length} results)`;
  }, [displayedProducts.length]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setCartMessage(`${product.title} added to cart!`);
  };

  const handleClear = () => {
    setSearchText("");
    setDebouncedSearch("");
    setCategory("All");
    setSortOrder("default");
  };

  return (
    <div className="app">
      <h1>CvSU Mini Store</h1>
      <p className="cart-info">
        Cart: {cart.length} item(s) {cartMessage && `— ${cartMessage}`}
      </p>

      <SearchBar
        searchText={searchText}
        onSearchTextChange={setSearchText}
        category={category}
        onCategoryChange={setCategory}
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
        onClear={handleClear}
      />

      <p className="result-count">
        Showing {displayedProducts.length} of {products.length} products
      </p>

      {displayedProducts.length === 0 ? (
        <p className="empty-state">
          No products found. Try a different keyword or category.
        </p>
      ) : (
        <div className="product-grid">
          {displayedProducts.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
