import React, { useEffect, useState } from "react";
import { getCategories, getProductsByCategory } from "./api";
import ProductCard from "./ProductCard";
import "./category.css"

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
      setSelectedCategory(data[0]); // select first category by default
    });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      getProductsByCategory(selectedCategory).then((data) => {
        setProducts(data);
      });
    }
  }, [selectedCategory]);

  return (
    <div className="category-page">
      <h2>Shop by Category</h2>

      {/* Category Dropdown */}
      <select
        className="category-select"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((cat, i) => (
          <option key={i} value={cat}>
            {cat.toUpperCase()}
          </option>
        ))}
      </select>

      {/* Products */}
      <div className="products-container">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
