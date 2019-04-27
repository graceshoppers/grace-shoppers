import React from "react";
import Navbar from "./Nav";
import addToCart from "../redux-store/store";
import connect from "react-redux";
import SingleProduct from "./SingleProduct";
import Link from "react-router-dom";

const Catalog = props => {
  return (
    <div>
      <Navbar />
      {props.products.map(product => {
        // CHECK ROUTES
        <Link to={`/product/${id}`}>
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
