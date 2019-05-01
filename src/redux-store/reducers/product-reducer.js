import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCTS_BY_CATEGORY,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  SEARCH_PRODUCTS,
} from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...action.products];

    case GET_PRODUCT_BY_ID:
      return [action.product];

    case GET_PRODUCTS_BY_CATEGORY:
      return [...action.productsByCategory];

    case CREATE_PRODUCT:
      return [...state, action.newProduct];

    case UPDATE_PRODUCT:
      return [
        ...state.filter(product => product.id !== action.updatedProduct.id),
        action.updatedProduct,
      ];

    case DELETE_PRODUCT:
      return state.filter(product => product.id !== action.productId);

    case SEARCH_PRODUCTS:
      return [...action.searchedProducts];

    default:
      return state;
  }
};
