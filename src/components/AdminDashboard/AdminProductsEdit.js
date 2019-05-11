import React from 'react';
import {connect} from 'react-redux';
import {
  editProduct,
  deleteProduct,
} from '../../redux-store/actions/product-actions';

class AdminProductsEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      edittable: false,
    };
  }

  makeEdittable = () => {
    this.setState(prevState => ({edittable: !prevState.edittable}));
  };

  handleSubmit = event => {
    event.preventDefault();

    const productToEdit = {
        id:this.props.product.id,
        name: event.target.name.value,
        material: event.target.material.value,
        description: event.target.description.value,
        unitCost: event.target.unitCost.value,
        stock: event.target.stock.value,
      };
      
    this.props.editProduct(productToEdit)
    this.setState(prevState => ({edittable: !prevState.edittable}));
  };
  render() {
    const {
      id,
      name,
      unitCost,
      stock,
      material,
      description,
    } = this.props.product;
    const {deleteProduct} = this.props

    if (this.state.edittable) {
      return (
        <form onSubmit={this.handleSubmit}>
          <div
            className="row justify-content-center form-group"
            key={id}
            style={{marginBottom: '5px', borderBottom: '1px solid gray'}}
          >
            <div className="col-1" style={{width: '5px'}}>
              {/* <img src="edit_icon.png" onClick={this.makeEdittable} /> */}

              <button
                className="btn btn-outline-secondary btn-sm"
                type="submit"
              >
                {' '}
                <img style={{width:'20px', height:'20px'}} src="save_icon.png" />
              </button>
            </div>
            <div className="col-2">
              <input className="form-control" type="text" name="name"  defaultValue={name} />
            </div>
            <div className="col-2">
              <input className="form-control" type="text" name="material" defaultValue={material} />
            </div>
            <div className="col-2" width="40%">
              <textarea className="form-control" type="text" name="description" defaultValue={description} />
            </div>
            <div className="col-2">
              <input className="form-control" type="text" name="unitCost" defaultValue={unitCost} />
            </div>
            <div className="col-2">
            
              <select className="form-control" name="stock">
                <option value="true">In Stock</option>
                <option value="false">Out of Stock</option>
              </select>
            </div>
            <div className="col-1">
              <button
              style={{width:'35px'}}
                className="btn btn-outline-dark"
                onClick={() => deleteProduct(id)}
              >
                -
              </button>
            </div>
          </div>
        </form>
      );
    } else {
      return (
        <div
          className="row justify-content-center"
          key={id}
          style={{marginBottom: '5px', borderBottom: '1px solid gray'}}
        >
          <div className="col-1" style={{width: '5px'}}>
            <img src="edit_icon.png" onClick={this.makeEdittable} />
          </div>
          <div className="col-2">{name}</div>
          <div className="col-2">{material}</div>
          <div className="col-2" width="40%">
            {description}
          </div>
          <div className="col-2">{unitCost}</div>
          <div className="col-2">
            {stock === 0 ? 'Out of Stock' : 'In Stock'}
          </div>
          <div className="col-1">
            <button
            style={{width:'35px'}}
              className="btn btn-outline-dark"
              onClick={() => deleteProduct(id)}
            >
              -
            </button>
          </div>
        </div>
      );
    }
  }
}
export default connect(
  null,
  {editProduct, deleteProduct}
)(AdminProductsEdit);
