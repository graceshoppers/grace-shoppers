/* eslint-disable react/button-has-type */
import React, {Component} from 'react';
import {Route} from 'react-router-dom';

// Redux imports
import {connect} from 'react-redux';
import {fetchProducts} from '../../redux-store/actions/product-actions';
import {fetchReviews} from '../../redux-store/actions/review-actions';
import {fetchUsers} from '../../redux-store/actions/user-actions';

import './App.css';

// Component imports
import Navbar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Catalog from '../Catalog/Catalog';
import SingleProduct from '../SingleProduct/SingleProduct';
import Cart from '../Cart/Cart';
import SignUp from '../SignUp/SignUp';
import UserProfile from '../UserProfile/UserProfile';
import Auth from '../../Auth/Auth';
import Checkout from '../Checkout/Checkout';

const auth = new Auth();

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchReviews();
    this.props.fetchUsers();
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

        {/* Landing page route */}
        <Route exact path="/" component={Home} />

        {/* Catalog route */}
        <Route exact path="/catalog" component={Catalog} />

        {/* Catelog by category route */}
        <Route exact path="/catalog/:category" component={Catalog} />

        {/* Catelog with search results route */}
        <Route exact path="/catalog/search/:searchTerm" component={Catalog} />

        {/* Product details route */}
        <Route path="/products/:id" component={SingleProduct} />

        {/* cart route */}
        <Route exact path="/cart" component={Cart} />

        {/* checkout route */}
        <Route exact path="/checkout" component={Checkout} />

        {/* SignUp route */}
        <Route path="/signup" component={SignUp} />

        {/* Profile route */}
        <Route
          exact
          path="/profile"
          render={() => <UserProfile auth={auth} />}
        />

        <Route path="/callback" render={() => <p>Loading...</p>} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchReviews: () => dispatch(fetchReviews()),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(
  null,
  mapDispatchToProps
)(App);
