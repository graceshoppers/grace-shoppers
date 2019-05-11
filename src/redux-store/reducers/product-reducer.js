import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...action.products].sort((product1,product2)=> product1.id-product2.id);

    case CREATE_PRODUCT:
      return [action.newProduct, ...state];

    case UPDATE_PRODUCT:
      return [
        ...state.filter(product => product.id !== action.updatedProduct.id),
        action.updatedProduct,
      ].sort((product1,product2)=> product1.id-product2.id);

    case DELETE_PRODUCT:
      return state.filter(product => product.id !== action.productId);

    default:
      return state;
  }
};
