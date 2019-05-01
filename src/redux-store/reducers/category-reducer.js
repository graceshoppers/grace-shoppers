import {
  GET_CATEGORIES,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
} from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return [...action.categories];

    case CREATE_CATEGORY:
      return [...state, action.newCategory];

    case UPDATE_CATEGORY:
      return [
        ...state.filter(category => category.id !== action.updatedCategory.id),
        action.updatedCategory,
      ];

    default:
      return state;
  }
};
