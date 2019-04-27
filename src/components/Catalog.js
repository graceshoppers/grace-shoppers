import React from "react";
import SearchBar from "./SearchBar";
import Nav from "./Nav";
import addToCart from "../redux-store/store";
import connect from "react-redux";
import SingleProduct from "./SingleProduct";
import Link from "react-router-dom";

const Catalog = props => {
  return (
    <div>
      <SearchBar />
      <Nav />
      {props.product.map(product => {
        // CHECK ROUTES
        <Link to="/products/:product">
          <SingleProduct key={product.id} product={product} />
        </Link>;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(Catalog);
