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
        <h2 className="prod">Products</h2>
        <div onClick={() => console.log("hi")} className="nav-cart-flex">
          <FiShoppingCart className="cart-icon" />
          <p>{10}</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
