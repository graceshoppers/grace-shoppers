// React imports
import React, {Component} from 'react';
import {Route} from 'react-router-dom';

// Redux imports
import {connect} from 'react-redux';
import {fetchProducts} from '../redux-store/actions/product-actions';
import {fetchReviews} from '../redux-store/actions/review-actions';
import {getUserDetailsFromSession} from '../redux-store/actions/user-actions';

// Component imports
import Navbar from './Nav';
import Home from './Home';
import Catalog from './Catalog';
import Cart from './Cart';
import SingleProduct from './SingleProduct';
import Login from './Login';
import SignUp from './SignUp';
import AccountSettings from './AccountSettings';

// CSS imports
import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchReviews();
    this.props.getUserDetailsFromSession();
  }

  render() {
    console.log(this.props.userDetails);
    return (
      <div className="container-fluid">
        <Route component={Navbar} />

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

        {/* Account Profile Route */}
        <Route path="/account" component={AccountSettings} />
      </div>
    );
  }
}

const mapStateToProps = ({userDetails}) => ({userDetails});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchReviews: () => dispatch(fetchReviews()),
  getUserDetailsFromSession: () => dispatch(getUserDetailsFromSession()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
