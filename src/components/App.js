import React, {Component, Fragment} from 'react';
import {Route, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {fetchProducts} from '../redux-store/actions/product-actions';
import {fetchReviews} from '../redux-store/actions/review-actions';
import {fetchUsers} from '../redux-store/actions/user-actions';
import {fetchOrders} from '../redux-store/actions/order-actions';

import Navbar from './Nav';
import Home from './Home';
import Catalog from './Catalog';
import Cart from './Cart';
import SingleProduct from './SingleProduct';
import Login from './Login';
import SignUp from './SignUp';
import Checkout from './Checkout';
import AccountSettings from './AccountSettings';

import '../styles/App.css'
class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchReviews();
    this.props.fetchUsers();
    this.props.fetchOrders();
  }

  render() {
    return (
      <div className="container-fluid">
        <Route component={Navbar} />

        {/* Landing page route */}
        <Route exact path="/" component={Home}/>

        {/* Catalog route */}
        <Route exact path="/catalog" component={Catalog} />

        {/* Catelog by category route */}
        <Route exact path="/catalog/:category" component={Catalog} />

        {/* Catelog with search results route */}
        <Route exact path="/catalog/search/:searchTerm" component={Catalog} />

        {/* Product details route */}
        <Route path="/products/:id" component={SingleProduct} />

        {/* Checkout/cart route */}
        <Route exact path="/cart" component={Cart} />

        {/* Login Route */}
        <Route path="/login" render={() => <Login />}/>

        {/* SignUp Route */}
        <Route path="/signup" render={() => <SignUp />}/>

        {/* Checkout Route */}
        <Route path="/checkout" render={() => <Checkout/>}/>

        {/* /users/accountsettings */}
        <Route exact path="/users/:userId/accountsettings/" component={AccountSettings}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchReviews: () => dispatch(fetchReviews()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchOrders: () => dispatch(fetchOrders())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
