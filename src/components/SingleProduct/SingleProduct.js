import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteProduct} from '../../redux-store/actions/product-actions';
import {addProductToCart} from '../../redux-store/actions/cart-actions';
import Reviews from './Reviews';

import './SingleProduct.css';

class SingleProduct extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      currentImg: '',
    };
  }

  componentDidMount() {
    const findProduct = (productsArray, productId) =>
      productsArray.find(product => product.id === productId);
    const {products} = this.props;
    const product = findProduct(products, +this.props.match.params.id);
    if (!product) return null;
    this.setState({product, currentImg: product.imageName});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      const findProduct = (productsArray, productId) =>
        productsArray.find(product => product.id === productId);
      const {products} = this.props;
      const product = findProduct(products, +this.props.match.params.id);
      if (!product) return null;
      this.setState({product, currentImg: product.imageName});
    }
  }

  render() {
    const handleClick = ({src,className}) => {
      const currentImg = src.substring(src.lastIndexOf('/') + 1, src.length);
      className = ''
      this.setState({currentImg});
    };

    if (this.state.product.name) {
      const {match, addProductToCart, deleteProduct} = this.props;
      const {product, currentImg} = this.state;
      const {imageName, name, material, description} = product;

      const avgReviews = reviews => {
        let allStars = 0;
        reviews.forEach(review => (allStars += review.stars));
        return allStars / reviews.length;
      };

      return (
        <div className="d-flex flex-column">
          <div className="container-fluid">
            <div className="row justify-content-between">
              <div className="col-1 d-flex flex-column ">
                <img
                  className="single-img-small"
                  src={'trinity_ring.jpg'}
                  onClick={({target}) => handleClick(target)}
                />
                <img
                  className="single-img-small"
                  src={'wrap-necklace.jpg'}
                  onClick={({target}) => handleClick(target)}
                />
                <img
                  className="single-img-small active-img"
                  src={imageName}
                  onClick={({target}) => handleClick(target)}
                />
              </div>
              <div className="col-4">
                <div className="aspect-ratio-box">
                  <img
                    className="single-img aspect-ratio-box-inside"
                    src={currentImg}
                  />
                </div>
              </div>
              <div className="col-6 align-self-start d-flex flex-column">
                <h1>{name}</h1>
                <h3>{material}</h3>
                <p>{description}</p>
                <div className="">
                  <button
                    className="btn btn-dark"
                    onClick={() => addProductToCart(this.state.product)}
                    style={{width: '200px', borderRadius: '0px'}}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Reviews product={this.state.product} />
          {/* <button
            style={{ color: "red", marginRight: "1em" }}
            onClick={() => deleteProduct(product.id)}
          >
            Delete Product
          </button> */}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = ({products}) => ({products});

const mapDispatchToProps = dispatch => ({
  addProductToCart: product => dispatch(addProductToCart(product)),
  deleteProduct: productId => dispatch(deleteProduct(productId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct);
