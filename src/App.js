import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart";
import Contact from "./Contact";
import AllProducts from "./AllProducts";
import Category from "./Category";


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/category" element={<Category />} />
      
      </Routes>

    </div>
  );
}

export default App;