import {
  LOGIN_USER,
  CHECK_IF_A_USER_IS_LOGGED_IN,
} from '../actions/action-types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {...action.userDetails};

    case CHECK_IF_A_USER_IS_LOGGED_IN:
      return {...action.userDetails};

    default:
      return state;
  }
};
