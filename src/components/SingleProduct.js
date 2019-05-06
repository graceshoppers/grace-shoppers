import React from "react";
import { connect } from "react-redux";
import { deleteProduct } from "../redux-store/actions/product-actions";
import Reviews from "./Reviews";

const SingleProduct = props => {
  const { products, match, deleteProduct } = props;
  const product = findProduct(products, +match.params.id);
  if (!product) return null;

  const avgReviews = (reviews) => {
    let allStars = 0
    reviews.forEach(review => allStars += review.stars)
    return allStars/reviews.length

  }

  return (
    <div>
      <div className="row" style={{backgroundColor:"#EFECE7"}} >
        <div className="col" align="right">
          <img width="auto" height="600px" src={product.imageName} />
        </div>
        <div className="col">
          <div className="row">
          <h2 style={{color:"gray"}}>{product.category.name}</h2><br/>
          </div>
          <div className="row">
            <h1>{product.name}</h1>
          </div>
          <div className="row">
            <h3>{product.material}</h3>
          </div>
          <div className="row">
            <div className="col-10">
            <p>{product.description}</p>
            </div>
          </div>
          <div className="row" >
            <button className="btn btn-dark" style={{ width:"200px",borderRadius: "0px" }}>
              ADD TO CART
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

const mapStateToProps = ({ products }) => ({ products });

const mapDispatchToProps = dispatch => ({
  deleteProduct: productId => dispatch(deleteProduct(productId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProduct);
