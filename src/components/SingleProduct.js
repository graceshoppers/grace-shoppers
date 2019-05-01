import React, {Component} from 'react';

import {connect} from 'react-redux';
import {
  fetchProductById,
  deleteProduct,
} from '../redux-store/actions/product-actions';

class SingleProduct extends Component {
  componentDidMount() {
    this.props.fetchProductById(+this.props.match.params.id);
  }
  render() {
    const {products, deleteProduct} = this.props;
    // const product = products.find(
    //   product => product.id === +this.props.match.params.id
    // );
    // if (!product) return null;

    const product = products[0];
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
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  fetchProductById: productId => dispatch(fetchProductById(productId)),

  deleteProduct: productId => dispatch(deleteProduct(productId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct);
