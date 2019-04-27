import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  render() {
    const { handleChange } = this;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top justify-content-end">
        <Link to="/" className="navbar-brand" style={{ marginRight: "2em" }}>
          Home
        </Link>

        <ul className="navbar-nav">
          <Link to="/" className="navbar-brand">
            Womens
          </Link>
        </ul>

        <div className="form-inline my-2 ml-auto mr-1">
          <input
            className="form-control mr-sm-2"
            name="search"
            type="text"
            placeholder="Search"
            onChange={handleChange}
            style={{ border: "0px solid" }}
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            style={{ border: "0px solid", marginRight: "2em" }}
          >
            <i className="fas fa-search fa-lg" />
          </button>
        </div>

        <button className="btn">
          <i className="fas fa-user-circle fa-lg" />
        </button>

        <button className="btn">
          <i className="fas fa-shopping-cart fa-lg" />
        </button>
      </nav>
    );
  }
}
