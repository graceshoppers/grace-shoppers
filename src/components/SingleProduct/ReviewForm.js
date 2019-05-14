import React from "react";
import { connect } from "react-redux";
import {addReview} from '../../redux-store/actions/review-actions'

const ReviewForm = props => {
    const {addReview} = props;

    const handleSubmit = (event) =>{
        event.preventDefault();

        const newReview = {
            textBody:event.target.review.value,
            title:event.target.title.value,
            recommended:event.target.recommended.value,
            stars:event.target.stars.value,
            productId:props.productId,
            userId:props.userDetails.userDetails.id
        }
        console.log(newReview)
        addReview(newReview)
    }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Review</h2>
      <div className="row">
        <div className="form-group col-2">
          <input
            className="form-control"
            name="title"
            type="text"
            placeholder="Enter Title"
          />
        </div>
        <div className="col-1">
          <select name="stars" className="form-control" defaultValue="Rate">
            <option value="Rate" disabled>
              Rate
            </option>
            <option value="5">5★</option>
            <option value="4">4★</option>
            <option value="3">3★</option>
            <option value="2">2★</option>
            <option value="1">1★</option>
          </select>
        </div>
        <div className="col-4">
          <textarea
            className="form-control"
            name="review"
            cols="25"
            type="text"
            placeholder="Write your review"
          />
        </div>

        <div className="col-2">
          <select name="recommended" className="form-control" defaultValue="Recommendation">
            <option value="Recommendation" disabled>
              Recommended
            </option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <div className="col-1">
          <button type="submit" className="btn btn-dark">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = ({ userDetails }) => ({ userDetails });

export default connect(mapStateToProps, {addReview} )(ReviewForm);
