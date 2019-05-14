import axios from 'axios';
import {
  GET_ORDERS,
  CREATE_ORDER,
  UPDATE_ORDER,
  DELETE_ORDER,
} from './action-types';

// ===============================
// Get all orders from database
export const fetchOrders = () => {
  return dispatch => {
    return axios
      .get('/api/orders')
      .then(res => dispatch(getOrders(res.data)))
      .catch(e => console.log(`Error fetching orders:\n${e}`));
  };
};

const getOrders = orders => ({
  type: GET_ORDERS,
  orders,
});

// ===============================
// Create a new order in database
export const addOrder = () => {
  return dispatch => {
    return axios.post('/api/orders').then(res => {
      dispatch(createOrder(res.data));
      return res.data;
    });
  };
};

const createOrder = newOrder => ({
  type: CREATE_ORDER,
  newOrder,
});

// ===============================
// Edit a order in database
export const editOrder = order => {
  const id = order.id;
  return dispatch => {
    return axios
      .put(`/api/orders/${id}`, order)
      .then(res => dispatch(updateOrder(res.data, order.id)))
      .catch(e => console.error(`Error updating a order:\n${e}`));
  };
};

const updateOrder = (updatedOrder, id) => ({
  type: UPDATE_ORDER,
  updatedOrder,
  id,
});

// ===============================
// Delete a order from database
export const deleteOrder = orderId => {
  return dispatch => {
    return axios
      .delete(`/api/orders/${orderId}`)
      .then(res => dispatch(removeOrder(orderId)))
      .catch(e => console.error(`Error updating a order:\n${e}`));
  };
};

const removeOrder = orderId => ({
  type: DELETE_ORDER,
  orderId,
});
