import React from "react";
import { connect } from "react-redux";

import './SingleProduct.css';

const Reviews = props => {
  const { reviews } = props;
  const { product } = props;
  const thisProductReviews = reviews.filter(
    review => review.productId === product.id
  );

  const getStars = stars => {
    if (stars === 1)
      return (
        <div>
          {filledStar()}
          {emptyStar()}
          {emptyStar()}
          {emptyStar()}
          {emptyStar()}
        </div>
      );
    if (stars === 2)
      return (
        <div>
          {filledStar()}
          {filledStar()}
          {emptyStar()}
          {emptyStar()}
          {emptyStar()}
        </div>
      );
    if (stars === 3)
      return (
        <div>
          {filledStar()}
          {filledStar()}
          {filledStar()}
          {emptyStar()}
          {emptyStar()}
        </div>
      );
    if (stars === 4)
      return (
        <div>
          {filledStar()}
          {filledStar()}
          {filledStar()}
          {filledStar()}
          {emptyStar()}
        </div>
      );
    if (stars === 5)
      return (
        <div>
          {filledStar()}
          {filledStar()}
          {filledStar()}
          {filledStar()}
          {filledStar()}
        </div>
      );
  };

  const filledStar = () => {
    return <img width="25 px" height="25 px" src="/stars/star_filled.png" />;
  };
  const emptyStar = () => {
    return <img width="25 px" height="25 px" src="/stars/star_empty.png" />;
  };

  return (
    <div className="d-flex flex-column review-container">
      <h4>What our customers say...</h4>

      {thisProductReviews.map(thisProductReview => {
        const {
          id,
          stars,
          title,
          createdAt,
          textBody,
          recommended
        } = thisProductReview;
        const { firstName, lastName } = thisProductReview.user;

        return (
          <div  key={id}>
            <div className="row">
              <div className="col">
                <h5>{title}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-auto">
                {firstName}&nbsp;
                {lastName}
              </div>
              <div className="col">{createdAt.slice(0,10)}</div>
            </div>
            <div className="row">
              <div className="col-2">{getStars(stars)}</div>
            </div>
            <div className="row">
              <div className="col"><p>{textBody}</p></div>
            </div>
            <div className="row">
              <div className="col">
                <h6>Recommended: {recommended ? "Yes" : "No"}</h6>
              </div>
            </div>
            <hr />
          </div>
        );
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
