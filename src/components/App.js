import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {fetchProducts, fetchUsers} from '../redux-store/store';

import Home from './Home';
import Cart from './Cart';
import Catalog from './Catalog';
import SingleProduct from './SingleProduct';

class App extends Component {
  async componentDidMount() {
    const {fetchProducts, fetchUsers} = this.props;
    await Promise.all([fetchProducts(), fetchUsers()]);
  }
  render() {
    const {products} = this.props;
    return (
      <Fragment>
        {/* Home route */}
        <Route
          exact
          path="/"
          render={props => <Home props={props} products={products} />}
        />
        {/* Product details route */}
        <Route
          path="/products/:id"
          render={props => <SingleProduct props={props} products={products} />}
        />
        {/* Product search route */}
        <Route
          to="/search/:searchTerm"
          render={({match}) => <Catalog products={[]} />}
        />

        {/* Checkout/cart route */}
        <Route exact path="/cart" component={Cart} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
