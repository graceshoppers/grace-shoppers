import React, {Component, Fragment} from 'react';
import {Route, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {fetchProducts} from '../redux-store/actions/product-actions';

import Navbar from './Nav';
import Home from './Home';
import Catalog from './Catalog';
import Cart from './Cart';
import SingleProduct from './SingleProduct';

import '../styles/App.css'
class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="column-container">
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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(
  null,
  mapDispatchToProps
)(App);
