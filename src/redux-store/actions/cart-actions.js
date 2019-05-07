import axios from 'axios';
import {ADD_PRODUCT_TO_CART} from './action-types';

// ===============================
// Adds a product to req.session.cart
export const addProductToCart = product => {
  return dispatch => {
    return axios
      .post('/api/cart-items', product)
      .then(res =>
        dispatch({
          type: ADD_PRODUCT_TO_CART,
          newCartItem: res.data,
        })
      )
      .catch(e => console.error(e));
  };
};
