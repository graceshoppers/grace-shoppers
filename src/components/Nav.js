import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  handleChange = ({target: {name, value}}) => this.setState({[name]: value});

  render() {
    const {handleChange} = this;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-end">
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
          />
          <button className="btn margin-right-2em" type="submit">
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
