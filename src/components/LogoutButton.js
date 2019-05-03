import React, { Component } from 'react';
import { Logout } from '../auth';

class LogoutButton extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    Logout();
  }

  render() {
    return (
        <button onClick={this.logout}>
        	Log Out
        </button>
    );
  }
}

export default LogoutButton;
