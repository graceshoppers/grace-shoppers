import {
  GET_USERS,
  CREATE_USER,
  UPDATE_USER,
  LOGIN_USER,
  CHECK_IF_A_USER_IS_LOGGED_IN,
} from '../actions/action-types';

const initialState = {
  users: [],
  userId: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Start of:
    // CRUD functionality
    case GET_USERS:
      return {...state, users: [...action.users]};

    case CREATE_USER:
      return {...state, users: [...state.users, action.newUser]};

    case UPDATE_USER:
      return {
        ...state,
        users: [
          ...state.users.filter(user => user.id !== action.updatedUser.id),
          action.user,
        ],
      };
    // End of:
    // CRUD functionality

    // Start of:
    // Authentication functionality
    case LOGIN_USER:
      return {...state, userDetails: action.userDetails || undefined};

    case CHECK_IF_A_USER_IS_LOGGED_IN:
      return {...state, userDetails: action.userDetails || undefined};

    // End of:
    // Authentication functionality
    default:
      return state;
  }
};
