/* eslint-disable complexity */
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import categoryReducer from './reducers/category-reducer';
import productReducer from './reducers/product-reducer';
import userReducer from './reducers/user-reducer';
import reviewReducer from './reducers/review-reducer';
import orderReducer from './reducers/order-reducer';


const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  users: userReducer,
  reviews: reviewReducer,
  orders: orderReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
