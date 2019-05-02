import axios from 'axios';
import {
  GET_REVIEWS,
  CREATE_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW,
} from './action-types';

// ===============================
// Get all reviews from database
export const fetchReviews = () => {
  return dispatch => {
    axios
      .get('/api/reviews')
      .then(res => dispatch(getReviews(res.data)))
      .catch(e => console.log(`Error fetching reviews:\n${e}`));
  };
};

const getReviews = reviews => ({
  type: GET_REVIEWS,
  reviews,
});

// ===============================
// Create a new review in database
export const addReview = review => {
  return dispatch => {
    return axios
      .post('/api/reviews', review)
      .then(res => dispatch(createReview(res.data)))
      .catch(e => console.log(`Error creating a review:\n${e}`));
  };
};

const createReview = newReview => ({
  type: CREATE_REVIEW,
  newReview,
});

// ===============================
// Edit a review in database
export const editReview = review => {
  const id = review.id;
  return dispatch => {
    return axios
      .put(`/api/reviews/${id}`, review)
      .then(res => dispatch(updateReview(res.data, review.id)))
      .catch(e => console.error(`Error updating a review:\n${e}`));
  };
};

const updateReview = (updatedReview, id) => ({
  type: UPDATE_REVIEW,
  updatedReview,
  id,
});

// ===============================
// Delete a review from database
export const deleteReview = reviewId => {
  return dispatch => {
    return axios
      .delete(`/api/reviews/${reviewId}`)
      .then(res => dispatch(removeReview(reviewId)))
      .catch(e => console.error(`Error updating a review:\n${e}`));
  };
};

const removeReview = reviewId => ({
  type: DELETE_REVIEW,
  reviewId,
});
