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
    const handleClick = ({src}) => {
      this.setState({currentImg: src});
    };

    if (!this.state.product.name) return <div />;

    const {addProductToCart} = this.props;
    const {product, currentImg} = this.state;
    const {sideImage, imageName, name, material, description} = product;
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
                className={`single-img-small ${
                  imageName === currentImg ||
                  imageName ===
                    currentImg.substring(
                      currentImg.lastIndexOf('/') + 1,
                      currentImg.length
                    )
                    ? 'active-img'
                    : ''
                }`}
                src={imageName}
                onClick={({target}) => handleClick(target)}
              />
              {sideImage.map(image => (
                <img
                  className={`single-img-small ${
                    image === currentImg ||
                    image ===
                      currentImg.substring(
                        currentImg.lastIndexOf('/') + 1,
                        currentImg.length
                      )
                      ? 'active-img'
                      : ''
                  }`}
                  src={image}
                  onClick={({target}) => handleClick(target)}
                />
              ))}
            </div>
            <div className="col-4">
              <div className="aspect-ratio-box">
                <img
                  className="single-img aspect-ratio-box-inside"
                  src={currentImg}
                />
              </div>
            </div>
            <div className="col-5 align-self-start d-flex flex-column">
              <h1>{name.toUpperCase()}</h1>
              <h3>{material}</h3>
              <p>{description}</p>
              <div>
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
      </div>
    );
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
