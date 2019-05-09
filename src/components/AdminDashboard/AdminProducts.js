import React from "react";
import { connect } from "react-redux";
import {
  addProduct,
  editProduct,
  deleteProduct
} from "../../redux-store/actions/product-actions";

const AdminProducts = props => {
  const { products } = props;
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th width='30%' scope="col">Name</th>
          <th width='10%' scope="col">Unit Cost</th>
          <th width='auto' scope="col">Status</th>
        </tr>
      </thead>

      <tbody>
        {products.map(product => {
          const {name, unitCost, stock} = product
          return (
            <tr>
              <td>{name}</td>
              <td>{unitCost}</td>
              <td>{stock===0?"Out of Stock":"In Stock"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { addProduct, editProduct, deleteProduct }
)(AdminProducts);
