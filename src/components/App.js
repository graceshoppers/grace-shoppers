import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Cart from './Cart';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Home />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/' components={Home} />
      </Fragment>
    );
  }
}

export default App;
