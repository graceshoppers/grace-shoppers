import React from 'react';
import {connect} from 'react-redux';

const SingleProduct = props => {
  const product = findProduct(props.products, +props.match.params.id);
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

const findProduct = (productsArray, productId) =>
  productsArray.find(product => product.id === productId);

const mapStateToProps = ({products}) => ({products});

export default connect(mapStateToProps)(SingleProduct);
