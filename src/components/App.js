import React, { Component } from "react";
import { Route } from "react-router-dom";

import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default App;
