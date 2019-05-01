import axios from 'axios';
import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCTS_BY_CATEGORY,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  SEARCH_PRODUCTS,
} from './action-types';

// ===============================
// Get all products from database
export const fetchProducts = () => {
  return dispatch => {
    axios
      .get('/api/products')
      .then(res => dispatch(getProducts(res.data)))
      .catch(e => console.log(`Error fetching products:\n${e}`));
  };
};

const getProducts = products => ({
  type: GET_PRODUCTS,
  products,
});

// ===============================
// Create a new product in database
export const addProduct = product => {
  return dispatch => {
    return axios
      .post('/api/products', product)
      .then(res => dispatch(createProduct(res.data)))
      .catch(e => console.log(`Error creating a product:\n${e}`));
  };
};

const createProduct = newProduct => ({
  type: CREATE_PRODUCT,
  newProduct,
});

// ===============================
// Edit a product in database
export const editProduct = product => {
  const id = product.id;
  return dispatch => {
    return axios
      .put(`/api/products/${id}`, product)
      .then(res => dispatch(updateProduct(res.data, product.id)))
      .catch(e => console.error(`Error updating a product:\n${e}`));
  };
};

const updateProduct = (updatedProduct, id) => ({
  type: UPDATE_PRODUCT,
  updatedProduct,
  id,
});

// ===============================
// Delete a product from database
export const deleteProduct = productId => {
  return dispatch => {
    return axios
      .delete(`/api/products/${productId}`)
      .then(res => dispatch(removeProduct(productId)))
      .catch(e => console.error(`Error updating a product:\n${e}`));
  };
};

const removeProduct = productId => ({
  type: DELETE_PRODUCT,
  productId,
});

// ===============================
// Get products by category in database
export const fetchProductsByCategory = category => {
  return dispatch => {
    return axios
      .get(`/api/products/by-category/${category}`)
      .then(res => dispatch(getProductsByCategory(res.data)))
      .catch(e => console.error(`Error searching for products:\n${e}`));
  };
};

const getProductsByCategory = productsByCategory => ({
  type: GET_PRODUCTS_BY_CATEGORY,
  productsByCategory,
});

// ===============================
// Get product by id in database
export const fetchProductById = productId => {
  return dispatch => {
    return axios
      .get(`/api/products/${productId}`)
      .then(res => dispatch(getProductById(res.data)))
      .catch(e => console.error(`Error getting product:\n${e}`));
  };
};

const getProductById = product => ({
  type: GET_PRODUCT_BY_ID,
  product,
});

// ===============================
// Search for products in database
export const searchForProductsInDatabase = searchTerm => {
  return dispatch => {
    return axios
      .get(`/api/products/search/${searchTerm}`)
      .then(res => dispatch(searchProducts(res.data)))
      .catch(e => console.error(`Error searching for products:\n${e}`));
  };
};

const searchProducts = searchedProducts => ({
  type: SEARCH_PRODUCTS,
  searchedProducts,
});
