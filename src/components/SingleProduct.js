import React from 'react';
import Navbar from './Nav';
import addToCart from '../redux-store/store';
import {connect} from 'react-redux';

import {deleteProduct} from '../redux-store/actions/product-actions';

const SingleProduct = props => {
  const {products, deleteProduct} = props;
  const product = products.find(
    item => item.id === props.props.match.params.id * 1
  );
  if (!product) return null;
  return (
    <div>
      <img src={product.imageName} />
      <h1>{product.name}</h1>
      <h3>{product.material}</h3>
      <p>{product.description}</p>
      {/* <button onClick={props.addToCart}>ADD TO CART</button>; */}
      <button
        style={{color: 'red', marginRight: '1em'}}
        onClick={() => deleteProduct(product.id)}
      >
        Delete Product
      </button>
      <button>ADD TO CART</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteProduct: productId => dispatch(deleteProduct(productId)),
});

export default connect(
  null,
  mapDispatchToProps
)(SingleProduct);
