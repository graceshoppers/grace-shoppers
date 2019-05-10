/* eslint-disable react/button-has-type */
import React, {Component} from 'react';
import {Route} from 'react-router-dom';

// Redux imports
import {connect} from 'react-redux';
import {fetchProducts} from '../../redux-store/actions/product-actions';
import {fetchCart} from '../../redux-store/actions/cart-actions';
import {fetchReviews} from '../../redux-store/actions/review-actions';

import {fetchUsers} from '../../redux-store/actions/user-actions';
import {fetchOrders} from '../../redux-store/actions/order-actions';
import {fetchOrderitems} from '../../redux-store/actions/orderitem-actions';
import {getUserDetails} from '../../redux-store/actions/auth-actions';


import './App.css';

// Component imports
import Navbar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Catalog from '../Catalog/Catalog';
import SingleProduct from '../SingleProduct/SingleProduct';

import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import UserProfile from '../UserProfile/UserProfile';
import Auth from '../../Auth/Auth';

import Cart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout';

import AdminDashboard from '../AdminDashboard/AdminDashboard';
import ThankYou from '../ThankYou/ThankYou';


const auth = new Auth();

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCart();
    this.props.fetchReviews();

    this.props.fetchUsers();
    this.props.fetchOrders();
    this.props.fetchOrderitems();
    this.props.getUserDetails();

  }

  render() {
    const {isAuthenticated} = auth;

    return (
      <div className="container-fluid">
        <Route
          render={({history}) => (
            <Navbar
              isAuthenticated={isAuthenticated()}
              auth={auth}
              history={history}
            />
          )}
        />

        {/* Catelog with search results route */}
        <Route path="/catalog/search/:searchTerm" component={Catalog} />

        {/* Catelog by category route */}
        <Route exact path="/catalog/:category" component={Catalog} />

        {/* Catalog route */}
        <Route exact path="/catalog" component={Catalog} />

        {/* Product details route */}
        <Route path="/products/:id" component={SingleProduct} />

        {/* cart route */}
        <Route path="/cart" component={Cart} />

        {/* checkout route */}
        <Route path="/checkout" component={Checkout} />

        {/* Login route */}
        <Route path="/login" component={Login} />

        {/* SignUp route */}
        <Route path="/signup" component={SignUp} />

        {/* Landing page route */}
        <Route exact path="/" component={Home} />

        {/* Profile route */}
        <Route
          exact

          path="/profile"
          render={({history}) => <UserProfile auth={auth} history={history} />}

        />
        {/* Thank you route */}
        <Route path="/thank_you" render={() => <ThankYou />}/>

        {/* Callback Route */}
        <Route path="/callback" render={() => <p>Loading...</p>} />

        {/* Admin routes */}
        <Route exact path="/admin/" component={AdminDashboard}/>



      </div>
    );
  }
}

const mapStateToProps = ({userDetails}) => ({userDetails});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchCart: () => dispatch(fetchCart()),
  fetchReviews: () => dispatch(fetchReviews()),

  fetchUsers: () => dispatch(fetchUsers()),
  fetchOrders: () => dispatch(fetchOrders()),
  fetchOrderitems: () => dispatch(fetchOrderitems()),
  getUserDetails: () => dispatch(getUserDetails()),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
