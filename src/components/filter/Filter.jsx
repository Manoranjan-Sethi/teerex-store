import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter">
      <span className="checkbox-btn">
        <p>Colour</p>
        <input type="checkbox" name="colour" value="Red" />
        <label>Red</label>
        <br />
        <input type="checkbox" name="colour" value="Blue" />
        <label>Blue</label>
        <br />
        <input type="checkbox" name="colour" value="Green" />
        <label>Green</label>
      </span>
      <span className="checkbox-btn">
        <p>Gender</p>
        <input type="checkbox" name="gender" value="Men" />
        <label>Men</label>
        <br />
        <input type="checkbox" name="gender" value="Women" />
        <label>Women</label>
      </span>
      <span className="checkbox-btn">
        <p>Price</p>
        <input type="checkbox" name="price" value="HTML" />
        <label>0 - Rs250</label>
        <br />
        <input type="checkbox" name="price" value="CSS" />
        <label>Rs250 - 450</label>
        <br />
        <input type="checkbox" name="price" value="JavaScript" />
        <label>Rs450</label>
      </span>
      <span className="checkbox-btn">
        <p>Type</p>
        <input type="checkbox" name="type" value="Polo" />
        <label>Polo</label>
        <br />
        <input type="checkbox" name="type" value="Hoodie" />
        <label>Hoodie</label>
        <br />
        <input type="checkbox" name="type" value="Basic" />
        <label>Basic</label>
      </span>
      {/* <button className="clr-btn">Clear Filter</button> */}
    </div>
  );
}

export default Filter;
