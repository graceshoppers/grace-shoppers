import axios from 'axios';
import {GET_CATEGORIES, CREATE_CATEGORY, UPDATE_CATEGORY} from './action-types';

// ===============================
// Get all categories from database
export const fetchCategories = () => {
  return dispatch => {
    return axios
      .get('/api/categories')
      .then(res => dispatch(getCategories(res.data)))
      .catch(e => console.log(`Error fetching categories:\n${e}`));
  };
};

const getCategories = categories => ({
  type: GET_CATEGORIES,
  categories,
});

// ===============================
// Create a new category in database
export const addCategory = newCategory => {
  return dispatch => {
    return axios
      .post('/api/categories', newCategory)
      .then(res => dispatch(createCategory(res.data)))
      .catch(e => console.log(`Error creating a category:\n${e}`));
  };
};

const createCategory = newCategory => ({
  type: CREATE_CATEGORY,
  newCategory,
});

// ===============================
// Edit a user in database
export const editCategory = updatedCategoryInfo => {
  const id = updatedCategoryInfo.id;
  return dispatch => {
    return axios
      .put(`/api/categories/${id}`, updatedCategoryInfo)
      .then(res => dispatch(updateCategory(res, id)))
      .catch(e => console.error(`Error updating a category:\n${e}`));
  };
};

const updateCategory = (updatedCategory, id) => {
  return {
    type: UPDATE_CATEGORY,
    updatedCategory,
    id,
  };
};
