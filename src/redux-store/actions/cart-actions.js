import axios from 'axios';
import {FETCH_CART, ADD_PRODUCT_TO_CART} from './action-types';

// ===============================
// Gets all cart items from req.session.cart
export const fetchCart = () => {
  return dispatch => {
    return axios
      .get('/api/cart-items')
      .then(res =>
        dispatch({
          type: FETCH_CART,
          cart: res.data,
        })
      )
      .catch(e => console.error(e));
  };
};

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
