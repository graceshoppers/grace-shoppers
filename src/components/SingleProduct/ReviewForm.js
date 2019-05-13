import React from "react";
import { connect } from "react-redux";

const ReviewForm = props => {
  console.log(props.userDetails);
  return (
    <form>
      <h2>Add a Review</h2>
      <div className="row">
        <div className="form-group col-2">
          <input
            id="title"
            className="form-control"
            name="title"
            type="text"
            placeholder="Enter Title"
          />
        </div>
        <div className="col-1">
          <select className="form-control">
          <option value="rate" disabled selected>Rate</option>
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
        <select className="form-control">
          <option value="rate" disabled selected>Recommended</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <div className="col-1"><button type="submit" className="btn btn-dark">Add</button></div>
      </div>
    </form>
  );
};

const mapStateToProps = ({ userDetails }) => ({ userDetails });

export default connect(mapStateToProps)(ReviewForm);
