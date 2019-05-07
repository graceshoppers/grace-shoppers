import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './Nav.css';
import NavMenu from './NavMenu';
import SearchBar from './SearchBar';
import CartButton from '../Cart/CartButton';

class NavBar extends Component {
  render() {
    const {handleChange, handleClick, handleKeyDown} = this;
    const {history, auth, isAuthenticated} = this.props;

    return (
      <nav className="row navbar navbar-expand-lg navbar-light fixed-container">
        <SearchBar history={history} />

        {/* Home link */}
        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          <NavLink to="/" className="navbar-brand margin-right-2em">
            <div className="home-logo">
              <div className="horizontal-flip">K</div>BMK
            </div>
          </NavLink>

          <NavMenu />
        </div>

        <div className="col d-flex justify-content-end align-items-center">
          {/* Profile/Login button */}

          {isAuthenticated ? (
            <button className="btn" onClick={() => history.push('/profile')}>
              <i className="fas fa-user-check fa-lg" />
            </button>
          ) : (
            <button className="btn" onClick={auth.login.bind(this)}>
              <i className="fas fa-user-circle fa-lg" />
            </button>
          )}

          <CartButton />
        </div>
      </nav>
    );
  }
}

export default NavBar;
