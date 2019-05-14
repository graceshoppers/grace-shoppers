import React from 'react';
import {connect} from 'react-redux';

import './SingleProduct.css';

const Reviews = props => {
  const {reviews} = props;
  const {product} = props;
  const {users} = props;
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

  const lookUpUser = (userId) => {
    return props.users.find(user => user.id === userId)
  }

  return (
    <div className="d-flex flex-column">
      <h2>REVIEWS</h2>
      <div className="review-top-lightgrey-border" />

      {thisProductReviews.map(thisProductReview => {
        const {
          id,
          stars,
          title,
          createdAt,
          textBody,
          recommended,
          userId
        } = thisProductReview;

        const {firstName, lastName} = lookUpUser(userId)


        return (
          <div key={id}>
            <div className="">
              <div className="">
                <h5>{title}</h5>
              </div>
            </div>
            <div className="">
              <div className="">
                {firstName}&nbsp;
                {lastName}
              </div>
              <div className="">{createdAt.slice(0, 10)}</div>
            </div>
            <div className="">
              <div className="">{getStars(stars)}</div>
            </div>
            <div className="">
              <div className="">
                <p>{textBody}</p>
              </div>
            </div>
            <div className="">
              <div className="">
                <h6>Recommended: {recommended ? 'Yes' : 'No'}</h6>
              </div>
            </div>
            <div className="review-top-lightgrey-border" />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    reviews: state.reviews,
    users: state.users
  };
};

export default connect(mapStateToProps)(Reviews);
