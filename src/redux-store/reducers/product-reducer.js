import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...action.products];

    case CREATE_PRODUCT:
      return [...state, action.newProduct];

    case UPDATE_PRODUCT:
      return [
        ...state.filter(product => product.id !== action.updatedProduct.id),
        action.updatedProduct,
      ];

    case DELETE_PRODUCT:
      return state.filter(product => product.id !== action.productId);

    default:
      return state;
  }
};
