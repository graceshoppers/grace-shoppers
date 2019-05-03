import React, { Component } from 'react';
import { Login } from '../auth';

class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    Login();
  }

  render() {
    return (
        <button onClick={this.login}>
        	Log In
        </button>
    );
  }
}

export default LoginButton;
