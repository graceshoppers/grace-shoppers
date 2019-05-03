import {
  GET_USERS,
  CREATE_USER,
  UPDATE_USER,
  LOGIN_USER,
  CHECK_IF_A_USER_IS_LOGGED_IN,
} from '../actions/action-types';

const initialState = {
  users: [],
  loggedInUserInfo: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Start of:
    // CRUD functionality
    case GET_USERS:
      return [...action.users];

    case CREATE_USER:
      return [...state, action.newUser];

    case UPDATE_USER:
      return [
        ...state.filter(user => user.id !== action.updatedUser.id),
        action.user,
      ];
    // End of:
    // CRUD functionality

    // Start of:
    // Authentication functionality
    case LOGIN_USER:
      console.log(action.status);

    case CHECK_IF_A_USER_IS_LOGGED_IN:
      console.log(action.userInfo);
    // End of:
    // Authentication functionality
    default:
      return state;
  }
};
