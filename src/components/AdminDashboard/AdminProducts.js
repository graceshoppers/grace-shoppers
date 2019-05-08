import React from "react";
import { connect } from "react-redux";
import {
  addProduct,
  editProduct,
  deleteProduct
} from "../../redux-store/actions/product-actions";

const AdminProducts = (props) =>{
    const {products} = props
    return <div>{products.map(product =>{
        return(
            <div>{product.name}</div>
        )
    })}</div>;
}

const mapStateToProps = state => {
    return {
      products: state.products
    };
  };


export default connect(mapStateToProps, {addProduct, editProduct, deleteProduct})(AdminProducts)