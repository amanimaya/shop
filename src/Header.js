import "./header.css"
import { FaUser, FaShoppingCart, FaTimes, FaBars } from "react-icons/fa";
import image from "./shoplogo.png"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {   
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="header">
      
      <div id="logodiv">
        <Link to="/">
          <img src={image} id="logo" alt="Shop Logo" />
        </Link>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div id="headerlistdiv" className={menuOpen ? "open" : ""}>
        <ul className="header-list">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

          <li className="dropdown">
            <Link to="/Category">Categories </Link>
            
          </li>

          <li><Link to="/products" onClick={() => setMenuOpen(false)}>All Products</Link></li>
        </ul>
      </div>

      <div id="functionsdiv">
        
        <Link to="/cart">
          <FaShoppingCart className="icon" />
        </Link>
      </div>

    </div>
  );
}