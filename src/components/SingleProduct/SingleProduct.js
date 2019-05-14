import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteProduct} from '../../redux-store/actions/product-actions';
import {addProductToCart} from '../../redux-store/actions/cart-actions';
import Reviews from './Reviews';
import ReviewForm from './ReviewForm';
import parseCost from '../../shared/parse-cost';

import './SingleProduct.css';

class SingleProduct extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      currentImg: '',
      showReviewForm: false,
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

    const {userDetails} = this.props;

    if (!this.state.product.name) return <div />;

    const {addProductToCart} = this.props;
    const {product, currentImg, showReviewForm} = this.state;
    const {
      sideImage,
      imageName,
      name,
      material,
      description,
      unitCost,
    } = product;
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
                  imageName === currentImg.replace('http://localhost:3000', '')
                    ? 'active-img'
                    : ''
                }`}
                src={imageName}
                onClick={({target}) => handleClick(target)}
              />
              {sideImage.map(image => (
                <img
                  key={image}
                  className={`single-img-small ${
                    image === currentImg ||
                    image === currentImg.replace('http://localhost:3000', '')
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
              <div className='d-flex flex-column'>
                <button
                  onClick={() => addProductToCart(this.state.product)}
                  style={{minWidth: '150px',maxWidth:'350px'}}
                >
                  {parseCost(unitCost)} | Add to Cart
                </button>

                {userDetails.id ? (
                  <button
                    onClick={evt =>
                      this.setState({
                        showReviewForm: !this.state.showReviewForm,
                      })
                    }
                    style={{minWidth: '150px',maxWidth:'350px'}}
                  >
                    Add A Review
                  </button>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
        <br />
        {showReviewForm ? <ReviewForm productId={product.id} /> : ''}
        <Reviews product={this.state.product} />
      </div>
    );
  }
}

const mapStateToProps = ({products, userDetails}) => ({products, userDetails});

const mapDispatchToProps = dispatch => ({
  addProductToCart: product => dispatch(addProductToCart(product)),
  deleteProduct: productId => dispatch(deleteProduct(productId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct);
