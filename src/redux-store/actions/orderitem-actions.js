import axios from 'axios';
import {
  GET_ORDERITEMS,
  CREATE_ORDERITEM,
  UPDATE_ORDERITEM,
  DELETE_ORDERITEM,
} from './action-types';

// ===============================
// Get all orderitems from database
export const fetchOrderitems = () => {
  return dispatch => {
    return axios
      .get('/api/order-items')
      .then(res => dispatch(getOrderitems(res.data)))
      .catch(e => console.log(`Error fetching orderitems:\n${e}`));
  };
};

const getOrderitems = orderitems => ({
  type: GET_ORDERITEMS,
  orderitems,
});

// ===============================
// Create a new orderitem in database
export const addOrderitem = orderitem => {
  return dispatch => {
    return axios
      .post('/api/orderitems', orderitem)
      .then(res => dispatch(createOrderitem(res.data)))
      .catch(e => console.log(`Error creating a orderitem:\n${e}`));
  };
};

const createOrderitem = newOrderitem => ({
  type: CREATE_ORDERITEM,
  newOrderitem,
});

// ===============================
// Edit a orderitem in database
export const editOrderitem = orderitem => {
  const id = orderitem.id;
  return dispatch => {
    return axios
      .put(`/api/orderitems/${id}`, orderitem)
      .then(res => dispatch(updateOrderitem(res.data, orderitem.id)))
      .catch(e => console.error(`Error updating a orderitem:\n${e}`));
  };
};

const updateOrderitem = (updatedOrderitem, id) => ({
  type: UPDATE_ORDERITEM,
  updatedOrderitem,
  id,
});

// ===============================
// Delete a orderitem from database
export const deleteOrderitem = orderitemId => {
  return dispatch => {
    return axios
      .delete(`/api/orderitems/${orderitemId}`)
      .then(res => dispatch(removeOrderitem(orderitemId)))
      .catch(e => console.error(`Error updating a orderitem:\n${e}`));
  };
};

const removeOrderitem = orderitemId => ({
  type: DELETE_ORDERITEM,
  orderitemId,
});
