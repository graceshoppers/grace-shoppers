/* eslint-disable complexity */
import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const initialState = {
  categories: [],
  proucts: [],
  users: [],
};

const GOT_CATEGORIES = 'GOT_CATEGORIES';
const CREATE_CATEGORY = 'CREATE_CATEGORY';
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
const GOT_PRODUCTS = 'GOT_PRODUCTS';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const GOT_USERS = 'GOT_USERS';
const CREATE_USER = 'CREATE_USER';
const UPDATE_USER = 'UPDATE_USER';

const gotCategories = (categories) => {
  return {
    type: GOT_CATEGORIES,
    categories,
  };
};

const gotProducts = (products) => {
  return {
    type: GOT_PRODUCTS,
    products,
  };
};

const gotUsers = (users) => {
  return {
    type: GOT_USERS,
    users,
  };
};

const createCategory = (category) => {
  return {
    type: CREATE_CATEGORY,
    category,
  };
};

const createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    product,
  };
};

const createUser = (user) => {
  return {
    type: CREATE_USER,
    user,
  };
};

const updateCategory = (category, id) => {
  return {
    type: UPDATE_CATEGORY,
    category,
    id,
  };
};

const updateProduct = (product, id) => {
  return {
    type: UPDATE_PRODUCT,
    product,
    id,
  };
};

const updateUser = (user, id) => {
  return {
    type: UPDATE_USER,
    user,
    id,
  };
};

export const fetchCategories = () => {
  return dispatch => {
    return axios.get('/api/category')
      .then(res => res.data)
      .then(categories => dispatch(gotCategories(categories)))
      .catch(e => console.log(`Error fetching categories:\n${e}`));
  };
};

export const fetchProducts = () => {
  return dispatch => {
    return axios.get('/api/product')
      .then(res => res.data)
      .then(products => dispatch(gotProducts(products)))
      .catch(e => console.log(`Error fetching products:\n${e}`));
  };
};

export const fetchUsers = () => {
  return dispatch => {
    return axios.get('/api/user')
      .then(res => res.data)
      .then(users => dispatch(gotUsers(users)))
      .catch(e => console.log(`Error fetching users:\n${e}`));
  };
};

export const addCategory = (category) => {
  return dispatch => {
    return axios.post('/api/category', category)
      .then(res => res.data)
      .then(category => dispatch(createCategory(category)))
      .catch(e => console.log(`Error creating a category:\n${e}`));
  };
};

export const addProduct = (product) => {
  return dispatch => {
    return axios.post('/api/product', product)
      .then(res => res.data)
      .then(product => dispatch(createProduct(product)))
      .catch(e => console.log(`Error creating a product:\n${e}`));
  };
};

export const addUser = (user) => {
  return dispatch => {
    return axios.post('/api/user', user)
      .then(res => res.data)
      .then(user => dispatch(createUser(user)))
      .catch(e => console.log(`Error creating a user:\n${e}`));
  };
};

export const editCategory = (category) => {
  const id = category.id;
  return dispatch => {
    return axios.put(`/api/category/${id}`, category)
      .then(res => res.data)
      .then(category => dispatch(updateCategory(category, category.id)))
      .catch(e => console.error(`Error updating a category:\n${e}`));
  };
};

export const editProduct = (product) => {
  const id = product.id;
  return dispatch => {
    return axios.put(`/api/product/${id}`, product)
      .then(res => res.data)
      .then(product => dispatch(updateProduct(product, product.id)))
      .catch(e => console.error(`Error updating a product:\n${e}`));
  };
};

export const editUser = (user) => {
  const id = user.id;
  return dispatch => {
    return axios.put(`/api/user/${id}`, user)
      .then(res => res.data)
      .then(user => dispatch(updateUser(user, user.id)))
      .catch(e => console.error(`Error updating a user:\n${e}`));
  };
};


const reducer = (state = initialState, action) => {
  switch(action.type){
    case GOT_CATEGORIES:
      return {...state, categories: action.categories};
    case CREATE_CATEGORY:
      return {...state, categories: [...state.categories, action.category]};
    case UPDATE_CATEGORY:
      return {...state, categories: [...state.categories.filter(cat => cat.id !== action.id, action.category)]};
    case GOT_PRODUCTS:
      return {...state, products: action.products};
    case CREATE_PRODUCT:
      return {...state, products: [...state.products, action.product]};
    case UPDATE_PRODUCT:
      return {...state, products: [...state.products.filter(prod => prod.id !== action.id, action.product)]};
    case GOT_USERS:
      return {...state, users: action.users};
    case CREATE_USER:
      return {...state, users: [...state.users, action.user]};
    case UPDATE_USER:
      return {...state, users: [...state.users.filter(user => user.id !== action.id, action.user)]};
    default:
      return state;
  };
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
