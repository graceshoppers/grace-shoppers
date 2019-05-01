import React, {Component, Fragment} from 'react';
import {Route, Redirect} from 'react-router-dom';

import Navbar from './Nav';
import Catalog from './Catalog';
import Cart from './Cart';
import SingleProduct from './SingleProduct';

export default class App extends Component {
  render() {
    return (
      <Fragment>
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
        <Route
          path="/products/:id"
          render={props => <SingleProduct props={props} />}
        />

        {/* Checkout/cart route */}
        <Route exact path="/cart" component={Cart} />
      </Fragment>
    );
  }
}
