import {
  GET_USER_DETAILS,
  LOGIN_USER,
  LOGOUT_USER,
} from '../actions/action-types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_USER_DETAILS:
    case LOGIN_USER:
    case LOGOUT_USER:
      return {...action.userDetails};

    default:
      return state;
  }
};
