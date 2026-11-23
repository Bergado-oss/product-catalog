const CATEGORIES = [
  "All",
  "Electronics",
  "Books",
  "School Supplies",
  "Accessories",
];

function SearchBar({
  searchText,
  onSearchTextChange,
  category,
  onCategoryChange,
  sortOrder,
  onSortOrderChange,
  onClear,
}) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={searchText}
        onChange={(e) => onSearchTextChange(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        value={sortOrder}
        onChange={(e) => onSortOrderChange(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>

      <button type="button" onClick={onClear}>
        Clear Filters
      </button>
    </div>
  );
}
