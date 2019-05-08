/* eslint-disable complexity */
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import categoryReducer from './reducers/category-reducer';
import productReducer from './reducers/product-reducer';
import cartReducer from './reducers/cart-reducer';
import userReducer from './reducers/user-reducer';
import userAuthReducer from './reducers/user-authentication-reducer';
import reviewReducer from './reducers/review-reducer';
import orderReducer from './reducers/order-reducer';
import orderitemsReducer from './reducers/orderitem-reducer';

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,
  users: userReducer,
  reviews: reviewReducer,
  orders: orderReducer,
  orderitems: orderitemsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
