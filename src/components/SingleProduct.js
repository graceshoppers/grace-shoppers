import React from "react";
import SearchBar from "./SearchBar";
import Nav from "./Nav";
import addToCart from "../redux-store/store";
import connect from "react-redux";

const SingleProduct = props => {
  return (
    <div>
      <SearchBar />
      <Nav />
      {props.product}
      {props.product.name}
      {props.product.description}
      {props.product.imageUrl}
      <button onClick={props.addToCart}>ADD TO CART</button>;
    </div>
  );
};

export default connect(
  null,
  { addToCart }
)(SingleProduct);
