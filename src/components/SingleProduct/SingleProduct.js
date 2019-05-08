import React from 'react';
import {connect} from 'react-redux';
import {deleteProduct} from '../../redux-store/actions/product-actions';
import {addProductToCart} from '../../redux-store/actions/cart-actions';
import Reviews from './Reviews';

import './SingleProduct.css';

const SingleProduct = props => {
  const {products, match, addProductToCart, deleteProduct} = props;
  const product = findProduct(products, +match.params.id);
  if (!product) return null;

  const avgReviews = reviews => {
    let allStars = 0;
    reviews.forEach(review => (allStars += review.stars));
    return allStars / reviews.length;
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-4 align-self-center">
          <div className="aspect-ratio-box">
            <img
              className="single-img aspect-ratio-box-inside"
              src={product.imageName}
            />
          </div>
        </div>
        <div className="col-6 align-self-start d-flex flex-column">
          <div className="">
            <h1>{product.name}</h1>
          </div>
          <div className="">
            <h3>{product.material}</h3>
          </div>
          <div className="">
            <div className="">
              <p>{product.description}</p>
            </div>
          </div>
          <div className="row">
            <button
              className="btn btn-dark"
              onClick={() => addProductToCart(product)}
              style={{width: '200px', borderRadius: '0px'}}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Reviews product={product} />
      {/* <button
            style={{ color: "red", marginRight: "1em" }}
            onClick={() => deleteProduct(product.id)}
          >
            Delete Product
          </button> */}
    </div>
  );
};

const findProduct = (productsArray, productId) =>
  productsArray.find(product => product.id === productId);

const mapStateToProps = ({products}) => ({products});

const mapDispatchToProps = dispatch => ({
  addProductToCart: product => dispatch(addProductToCart(product)),
  deleteProduct: productId => dispatch(deleteProduct(productId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct);
