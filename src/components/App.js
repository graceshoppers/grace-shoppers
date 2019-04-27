import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Navbar from './Nav';

class App extends Component {
  render() {
    return (
      <div className="master-container">
        <Navbar />
      </div>
    );
  }
}

export default App;
