import {FETCH_CART, ADD_PRODUCT_TO_CART} from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CART:
      return [...action.cart];

    case ADD_PRODUCT_TO_CART:
      return [...state, action.newCartItem];

    default:
      return state;
  }
};
