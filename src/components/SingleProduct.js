import React from 'react';
import Navbar from './Nav';
import addToCart from '../redux-store/store';
import connect from 'react-redux';

const SingleProduct = props => {
  const {product}=props
  return (
    <div>
      <Navbar />
      {product.name}
      {product.description}
      {product.imageUrl}
      <button onClick={props.addToCart}>ADD TO CART</button>;
    </div>
  );
};

// export default connect(
//   null,
//   {addToCart}
// )(SingleProduct);
export default SingleProduct
