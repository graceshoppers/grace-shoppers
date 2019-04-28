import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';

import Home from './Home';
import Cart from './Cart';
import SingleProduct from './SingleProduct';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      categories: [],
      users: [],
    };
  }
  async componentDidMount() {
    {
      /*
        ------------------
        Placeholder, replace with redux
        ------------------
        */
    }
    const products = await axios.get('/api/products').then(res => res.data);
    this.setState({...this.state, products: products});
  }
  render() {
    const {products} = this.state;
    return (
      <Fragment>
        <Route
          exact
          path="/"
          render={props => <Home props={props} products={products} />}
        />
        <Route exact path="/cart" component={Cart} />
        <Route
          path="/products/:id"
          render={props => <SingleProduct props={props} products={products}/>}
        />
      </Fragment>
    );
  }
}

export default App;
