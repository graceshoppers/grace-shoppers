import React, {Component} from 'react';

class SearchBar extends Component {
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
      <div className="form-inline my-2 ml-auto mr-1 search-container d-flex justify-content-start align-items-center col">
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
    );
  }
}

export default SearchBar;
