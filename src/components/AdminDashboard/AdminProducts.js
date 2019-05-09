import React from "react";
import { connect } from "react-redux";
import {
  addProduct,
  editProduct,
  deleteProduct
} from "../../redux-store/actions/product-actions";

const AdminProducts = props => {
  const { products, deleteProduct } = props;

  const mapProductTableBody = products => {
    return products.map(product => {
      const { id, name, unitCost, stock } = product;
      return (
        <tr key={id}>
          <td>{name}</td>
          <td>{unitCost}</td>
          <td>{stock === 0 ? "Out of Stock" : "In Stock"}</td>
          <td><button className='btn' onClick={()=>deleteProduct(id)}>Delete</button></td>
        </tr>
      );
    });
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th width="30%" scope="col">
            Name
          </th>
          <th width="15%" scope="col">
            Unit Cost
          </th>
          <th width="20%" scope="col">
            Status
          </th>
          <th><button className='btn'>ADD PRODUCT</button></th>
        </tr>
      </thead>
      <tbody>{mapProductTableBody(products)}</tbody>
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
