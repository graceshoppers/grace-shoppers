import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import '../styles/Nav.css';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  handleChange = ({target: {name, value}}) => this.setState({[name]: value});

  handleClick = () => this.searchForTerm();

  handleKeyDown = event => {
    if (event.key === 'Enter') this.searchForTerm();
  };

  searchForTerm = () =>
    this.props.history.push(`/catalog/search/${this.state.search}`);

  render() {
    const {handleChange, handleClick, handleKeyDown} = this;

    return (
      <nav className="row navbar navbar-expand-lg navbar-light bg-light justify-content-end fixed-container">
        {/* Link list */}
        <div className="form-inline my-2 ml-auto mr-1 search-container col">
          <input
            className="form-control mr-sm-2"
            name="search"
            type="text"
            placeholder="Search"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button className="btn margin-right-2em" onClick={handleClick}>
            <i className="fas fa-search fa-lg" />
          </button>
        </div>

        {/* Home link */}
        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          <NavLink to="/" className="navbar-brand margin-right-2em">
            <div className='home-logo'>
              <div className="horizontal-flip">K</div>BMK
            </div>
          </NavLink>
          <ul className="navbar-nav">
            <NavLink to="/catalog/rings" className="navbar-brand">
              Rings
            </NavLink>
            <NavLink to="/catalog/earrings" className="navbar-brand">
              Earrings
            </NavLink>
            <NavLink to="/catalog/bracelets" className="navbar-brand">
              Bracelets
            </NavLink>
            <NavLink to="/catalog/necklaces" className="navbar-brand">
              Necklaces
            </NavLink>
          </ul>
        </div>

        {/* Search input and button */}
        <div className="col">
          {/* Profile/Login button */}
          <button className="btn">
            <i className="fas fa-user-circle fa-lg" />
          </button>

          {/* Cart button */}
          <NavLink to="/cart" className="btn">
            <i className="fas fa-shopping-cart fa-lg" />
          </NavLink>
        </div>
      </nav>
    );
  }
}
