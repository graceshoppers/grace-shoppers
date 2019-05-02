import {
    GET_REVIEWS,
    CREATE_REVIEW,
    UPDATE_REVIEW,
    DELETE_REVIEW,
  } from '../actions/action-types';
  
  export default (state = [], action) => {
    switch (action.type) {
      case GET_REVIEWS:
        return [...action.reviews];
  
      case CREATE_REVIEW:
        return [...state, action.newReview];
  
      case UPDATE_REVIEW:
        return [
          ...state.filter(review => review.id !== action.updatedReview.id),
          action.updatedReview,
        ];
  
      case DELETE_REVIEW:
        return state.filter(review => review.id !== action.reviewId);
  
      default:
        return state;
    }
  };
  