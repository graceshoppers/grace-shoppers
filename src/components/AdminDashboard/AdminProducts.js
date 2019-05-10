import React from 'react';
import {connect} from 'react-redux';
import {
  addProduct
} from '../../redux-store/actions/product-actions';
import AdminProductsEdit from './AdminProductsEdit';

const AdminProducts = props => {
  const {products, deleteProduct, addProduct} = props;

  const mapProductTableBody = products => {
    return products.map(product => {
     
      return <AdminProductsEdit key={product.id} product={product} />
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newProduct = {
      name: event.target.name.value,
      material: event.target.material.value,
      description: event.target.description.value,
      unitCost: event.target.unitCost.value,
      stock: event.target.stock.value,
    };
    addProduct(newProduct);
  };

  return (
    <div className="table">
      <div>
        <div className="row" style={{marginBottom: '30px',marginTop: '30px', fontWeight:'bold'}}>
          <div className="col-1" style={{width: '5px'}} />
          <div className="col-2">Name</div>
          <div className="col-2">Material</div>
          <div className="col-2">Description</div>
          <div className="col-2">Unit Cost</div>
          <div className="col-2">Stock</div>
          <div className="col-1">+/-</div>
        </div>
        <form onSubmit={handleSubmit} style={{marginBottom: '30px'}}>
          <div className="row form">
            <div className="col-1" />
            <div className="col-2">
              <input className="form-control" type="text" name="name" />
            </div>
            <div className="col-2">
              <input className="form-control" type="text" name="material" />
            </div>
            <div className="col-2">
              <input className="form-control" type="text" name="description" />
            </div>
            <div className="col-2">
              <input className="form-control" type="text" name="unitCost" />
            </div>
            <div className="col-2">
              <select className="form-control" name="stock">
                <option value="true">In Stock</option>
                <option value="false">Out of Stock</option>
              </select>
            </div>
            <div className="col-1">
              <button style={{width:'35px'}} type="submit" className="btn btn-dark">
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
  {addProduct}
)(AdminProducts);
