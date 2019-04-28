import React from 'react';
import Navbar from './Nav';
import addToCart from '../redux-store/store';
import connect from 'react-redux';

const SingleProduct = props => {
  console.log(props.props.match.params.id);
  console.log(props.products);
  const product = props.products.find(
    item => item.id === props.props.match.params.id * 1
  );
  return (
    <div>
      <Navbar />
      <img src={product.imageName} />
      <h1>{product.name}</h1>
      <h3>{product.material}</h3>
      <p>{product.description}</p>
      {/* <button onClick={props.addToCart}>ADD TO CART</button>; */}
      <button>ADD TO CART</button>
    </div>
  );
};

// export default connect(
//   null,
//   {addToCart}
// )(SingleProduct);

export default SingleProduct;
