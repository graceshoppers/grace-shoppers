import React from 'react';
import {connect} from 'react-redux';
import {
  addProduct,
  editProduct,
  deleteProduct,
} from '../../redux-store/actions/product-actions';

const AdminProducts = props => {
  const {products, deleteProduct, addProduct} = props;

  const mapProductTableBody = products => {
    return products.map(product => {
      const {id, name, unitCost, stock, material, description} = product;
      return (
        <div className="row" key={id} style={{marginBottom:"5px", borderBottom:"1px solid gray"}}>
          <div className="col">{name}</div>
          <div className="col">{material}</div>
          <div className="col">{description}</div>
          <div className="col">{unitCost}</div>
          <div className="col">{stock === 0 ? 'Out of Stock' : 'In Stock'}</div>
          <div className="col">
            <button
              className="btn btn-outline-dark"
              onClick={() => deleteProduct(id)}
            >
              --
            </button>
          </div>
        </div>
      );
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newObj = {
      name:event.target.name.value,
      material:event.target.material.value,
      description:event.target.description.value,
      unitCost:event.target.unitCost.value,
      stock:event.target.stock.value
    }
    console.log(newObj)
    addProduct(newObj)

  };

  return (
    <div className="table">
      <div>
        <div className="row">
          <div className="col" width="30%" scope="col">
            Name
          </div>
          <div className="col" width="15%" scope="col">
            Material
          </div>
          <div className="col" width="40%" scope="col">
            Description
          </div>
          <div className="col">Unit Cost</div>
          <div className="col">Stock</div>
          <div className="col">+/-</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row form">
            <div className="col">
              <input className="form-control" type="text" name="name"/>
            </div>
            <div className="col">
              <input className="form-control"  type="text" name="material"/>
            </div>
            <div className="col">
              <input className="form-control"  type="text" name="description" />
            </div>
            <div className="col">
              <input className="form-control"  type="text" name="unitCost"/>
            </div>
            <div className="col">
            <select className="form-control"  name="stock">
      <option value="true">In Stock</option>
      <option value="false">Out of Stock</option>
     
    </select>
            </div>
            <div className="col">
              <button
                type="submit"
                className="btn btn-dark"
                
              >
                +
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>{mapProductTableBody(products)}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

export default connect(
  mapStateToProps,
  {addProduct, editProduct, deleteProduct}
)(AdminProducts);
