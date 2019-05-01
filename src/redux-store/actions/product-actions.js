import axios from 'axios';
import {
  GET_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from './action-types';

// ===============================
// Get all products from database
export const fetchProducts = () => {
  return dispatch => {
    return axios
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
