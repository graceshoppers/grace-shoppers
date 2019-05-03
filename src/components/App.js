import React, {Component, Fragment} from 'react';
import {Route, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {fetchProducts} from '../redux-store/actions/product-actions';
import {fetchReviews} from '../redux-store/actions/review-actions';

import Navbar from './Nav';
import Catalog from './Catalog';
import Cart from './Cart';
import SingleProduct from './SingleProduct';
import Login from './Login';
import SignUp from './SignUp';
import Callback from './Callback';
import Auth from '../auth';


const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchReviews();
  }

  render() {
    return (
      <div className="column-container">
        <Route component={Navbar} />

        {/* Landing page route */}
        <Route exact path="/" render={() => <Redirect to="/catalog" />} />

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

        <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props}/>
          }}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchReviews: () => dispatch(fetchReviews())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
