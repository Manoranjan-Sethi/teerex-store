import React from "react";
import "./Navbar.css";
import { FiShoppingCart } from "react-icons/fi";
import { CartState } from "../context/Context";

function Navbar() {
  const {
    state: { cart },
  } = CartState();
  return (
    <nav className="navbar">
      <div>
        <h1>TeeRex Store</h1>
      </div>
      <div className="nav-prod-flex">
        <h2 className="prod">Products</h2>
        <div onClick={() => console.log("hi")} className="nav-cart-flex">
          <FiShoppingCart className="cart-icon" />
          <p>{cart.length}</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
