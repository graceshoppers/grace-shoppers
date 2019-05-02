import {
    GET_ORDERS,
    CREATE_ORDER,
    UPDATE_ORDER,
  } from '../actions/action-types';
  
  export default (state = [], action) => {
    switch (action.type) {
      case GET_ORDERS:
        return [...action.orders];
  
      case CREATE_ORDER:
        return [...state, action.newOrder];
  
      case UPDATE_ORDER:
        return [
          ...state.filter(order => order.id !== action.updatedOrder.id),
          action.updatedOrder,
        ];
      default:
        return state;
    }
  };
  