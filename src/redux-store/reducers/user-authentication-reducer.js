import {
  GET_USER_DETAILS_FROM_SESSION,
  LOGIN_USER,
} from '../actions/action-types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_USER_DETAILS_FROM_SESSION:
      return {...action.userDetails};

    case LOGIN_USER:
      return {...action.userDetails};

    default:
      return state;
  }
};
