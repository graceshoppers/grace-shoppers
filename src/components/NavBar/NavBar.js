import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './Nav.css';
import NavMenu from './NavMenu';
import SearchBar from './SearchBar';
import UserButton from './UserButton';
import CartButton from '../Cart/CartButton';

class NavBar extends Component {
  render() {
    const {location, history, auth, isAuthenticated} = this.props;
    const isDisplayed = location.pathname === '/' ? 'none' : '';

    return (
      <nav
        className="row navbar navbar-expand-lg navbar-light fixed-container"
        style={{display: `${isDisplayed}`}}
      >
        <SearchBar history={history} />

        {/* Home link */}
        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          <NavLink to="/" className="navbar-brand">
            <div className="home-logo">
              <div className="horizontal-flip">K</div>BMK
            </div>
          </NavLink>
          <div className="nav-top-lightgrey-border" />
          <NavMenu />
        </div>
        <div className="col d-flex justify-content-end align-items-center">
          {/*
            Below code is for Auth0, which has not been fully implemented yet.
          */}

          {/* {isAuthenticated ? (
            <button className="btn" onClick={() => history.push('/profile')}>
              <i className="fas fa-user-check fa-lg" />
            </button>
          ) : (
            <button className="btn" onClick={auth.login.bind(this)}>
              <i className="fas fa-user-circle fa-lg" />
            </button>
          )} */}

          <UserButton history={history} />

          <CartButton />
        </div>
      </nav>
    );
  }
}

export default NavBar;
