import React from "react";
import "./Home.css";
import { CartState } from "../context/Context";
import Filter from "./../filter/Filter";
import SingleProduct from "./../singleProduct/SingleProduct";

function Home() {
  const {
    state: { getData },
  } = CartState();
  // console.log(getData);
  return (
    <div className="home">
      <Filter />
      <div className="products-container">
        {getData.map((ele) => {
          return <SingleProduct ele={ele} key={ele.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
