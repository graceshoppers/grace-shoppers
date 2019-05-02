import {
    GET_ORDERITEMS,
    CREATE_ORDERITEM,
    UPDATE_ORDERITEM,
  } from '../actions/action-types';
  
  export default (state = [], action) => {
    switch (action.type) {
      case GET_ORDERITEMS:
        return [...action.orderitems];
  
      case CREATE_ORDERITEM:
        return [...state, action.newOrderitem];
  
      case UPDATE_ORDERITEM:
        return [
          ...state.filter(orderitem => orderitem.id !== action.updatedOrderitem.id),
          action.updatedOrderitem,
        ];
      default:
        return state;
    }
  };
  