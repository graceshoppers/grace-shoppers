import React from "react";
import { connect } from "react-redux";

const Reviews = props => {
  const { reviews } = props;
  const { product } = props;
  const thisProductReviews = reviews.filter(review => review.productId === product.id)

  return (
    <div>
    <h2>REVIEWS BEGIN HERE</h2>
    <span>CUSTOMER NAME PLACEHOLDER</span>
     {thisProductReviews.map(thisProductReview => {
        return (
            <div>
            {thisProductReview.stars}
        <p>{thisProductReview.textBody}</p>
        </div>
        )
    })}
      
    </div> 
  );
};

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  };
};

export default connect(mapStateToProps)(Reviews);