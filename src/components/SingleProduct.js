import React from 'react';

import {connect} from 'react-redux';
import {
  fetchProducts,
  deleteProduct,
} from '../redux-store/actions/product-actions';

const SingleProduct = props => {
  const {products, deleteProduct} = props;
  const product = products.find(
    product => product.id === +props.match.params.id
  );
  if (!product) return null;

  return (
    <div>
      <img src={product.imageName} />
      <h1>{product.name}</h1>
      <h3>{product.material}</h3>
      <p>{product.description}</p>

      {/* Delete product button */}
      <button
        style={{color: 'red', marginRight: '1em'}}
        onClick={() => deleteProduct(product.id)}
      >
        Delete Product
      </button>

      {/* Add to cart button */}
      <button>Add to Cart</button>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),

  deleteProduct: productId => dispatch(deleteProduct(productId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct);
