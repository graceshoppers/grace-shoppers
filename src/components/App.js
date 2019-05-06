/* eslint-disable react/button-has-type */
import React, {Component, Fragment} from 'react';
import {Route, Redirect} from 'react-router-dom';

// Redux imports
import {connect} from 'react-redux';
import {fetchProducts} from '../redux-store/actions/product-actions';
import {fetchReviews} from '../redux-store/actions/review-actions';

// Component imports
import '../styles/App.css';
import Navbar from './NavBar/Navbar';
import Home from './Home';
import Catalog from './Catalog';
import Cart from './Cart';
import SingleProduct from './SingleProduct';
import Login from './Login';
import SignUp from './SignUp/SignUp';
import AccountSettings from './AccountSettings';
import Callback from '../Callback/Callback';
import Auth from '../Auth/Auth';
import history from '../history';

const auth = new Auth();

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchReviews();
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

        {/* Checkout/cart route */}
        <Route exact path="/cart" component={Cart} />

        {/* Login Route */}
        <Route path="/login" component={Login} />

        {/* SignUp Route */}
        <Route path="/signup" component={SignUp} />

        {/* /users/accountsettings */}
        <Route
          exact
          path="/users/:userId/accountsettings/"
          component={AccountSettings}
        />

        <Route path="/callback" render={props => <Callback {...props} />} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchReviews: () => dispatch(fetchReviews()),
});

export default connect(
  null,
  mapDispatchToProps
)(App);
