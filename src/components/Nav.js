import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../styles/Nav.css';

export default class extends Component {
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-end fixed-container">
        {/* Home link */}
        <Link to="/" className="navbar-brand margin-right-2em">
          Home
        </Link>

        {/* Link list */}
        <ul className="navbar-nav">
          <Link to="/rings" className="navbar-brand">
            Rings
          </Link>
          <Link to="/earrings" className="navbar-brand">
            Earrings
          </Link>
          <Link to="/bracelets" className="navbar-brand">
            Bracelets
          </Link>
          <Link to="/necklaces" className="navbar-brand">
            Necklaces
          </Link>
        </ul>

        {/* Search input and button */}
        <div className="form-inline my-2 ml-auto mr-1 search-container">
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

        {/* Profile/Login button */}
        <button className="btn">
          <i className="fas fa-user-circle fa-lg" />
        </button>

        {/* Cart button */}
        <Link to="/cart" className="btn">
          <i className="fas fa-shopping-cart fa-lg" />
        </Link>
      </nav>
    );
  }
}
