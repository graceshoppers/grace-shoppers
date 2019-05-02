import React from 'react';
import {connect} from 'react-redux';
import {deleteProduct} from '../redux-store/actions/product-actions';
import Reviews from './Reviews'

const SingleProduct = props => {
  const {products, match, deleteProduct} = props;
  const product = findProduct(products, +match.params.id);
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
      <button>ADD TO CART</button>
      <Reviews product={product} />
    </div>
  );
};

const findProduct = (productsArray, productId) =>
  productsArray.find(product => product.id === productId);

const mapStateToProps = ({products}) => ({products});

const mapDispatchToProps = dispatch => ({
  deleteProduct: productId => dispatch(deleteProduct(productId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct);
