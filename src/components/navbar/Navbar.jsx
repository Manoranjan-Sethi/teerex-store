import React from "react";
import "./Navbar.css";
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <h1>TeeRex Store</h1>
      </div>
      <div className="nav-prod-flex">
        <h2>Products</h2>
        <FiShoppingCart className="cart-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
