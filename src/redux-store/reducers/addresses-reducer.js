import {
  GET_ADDRESSES,
  CREATE_ADDRESSES,
  UPDATE_ADDRESSES,
  DELETE_ADDRESSES,
} from './action-types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_ADDRESSES:
    case CREATE_ADDRESSES:
    case UPDATE_ADDRESSES:
    case DELETE_ADDRESSES:
      return [...state.addresses.filter(address => address.id !== action.address.id)];
    default:
      return state;
  }
};
