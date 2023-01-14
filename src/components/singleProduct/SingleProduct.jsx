import React from "react";
import "./SingleProduct.css";

function SingleProduct({ ele }) {
  return (
    <div>
      <div className="product">
        <img src={ele.imageURL} alt={ele.name} />
        <p>{ele.name}</p>
        <p>Rs. {ele.price}</p>
        <button className="add-to-cart">Add to cart</button>
        <button className="remove-from-cart">Remove from cart</button>
      </div>
    </div>
  );
}

export default SingleProduct;
