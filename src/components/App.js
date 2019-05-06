/* eslint-disable react/button-has-type */
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
import AccountSettings from './AccountSettings';
import '../styles/App.css';
import Callback from '../Callback/Callback';
import Auth from '../Auth/Auth';
import history from '../history';

const auth = new Auth();

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    auth.login();
  }

  logout() {
    auth.logout();
  }

  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchReviews();
    this.props.fetchUsers();
    this.props.fetchOrders();
  }
  render() {
    const { isAuthenticated } = auth;
    return (
      <div className="container-fluid">
        <Route render={() => <Navbar isAuthenticated={isAuthenticated()} auth={auth}/>} />

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

        {/* /users/accountsettings */}
        <Route exact path="/users/:userId/accountsettings/" component={AccountSettings}/>

        <Route path="/callback" render={(props) => <Callback {...props} />} />
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
