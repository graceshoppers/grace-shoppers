import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Catalog.css';

import {connect} from 'react-redux';
import {fetchCategories} from '../redux-store/actions/category-actions';
import {
  fetchProducts,
  fetchProductsByCategory,
  searchForProductsInDatabase,
} from '../redux-store/actions/product-actions';

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
    };
  }

  setLocalProps = () => {
    const {location, match} = this.props;
    const urlArray = location.pathname.split('/');

    const filterKeyword = urlArray[urlArray.indexOf('catalog') + 1];

    this.props.fetchCategories();

    if (!filterKeyword) this.props.fetchProducts();
    //
    else if (filterKeyword.toLowerCase() === 'search') {
      this.props.searchProducts(match.params.searchTerm);
    }
    //
    else if (filterKeyword) {
      this.props.fetchProductsByCategory(filterKeyword);
    }
  };

  componentDidMount() {
    this.setLocalProps();
  }

  componentDidUpdate(previousProps) {
    if (previousProps.location.pathname !== this.props.location.pathname)
      this.setLocalProps();
  }

  render() {
    const {products} = this.props;

    return (
      <div className="overflow-container">
        <ul className="column-list">
          {products.length ? (
            products.map(product => {
              return <CatalogCard key={product.id} attributes={product} />;
            })
          ) : (
            <CatalogCard
              key="noProducts"
              attributes={{id: 0, name: 'No products'}}
            />
          )}
        </ul>
      </div>
    );
  }
}

const CatalogCard = ({attributes}) => {
  const {id, name, imageName} = attributes;

  return (
    <NavLink to={`/products/${id}`}>
      <li>
        <div className="product-container">
          <img src={imageName} className="catalog-img" name={imageName} />

          <div className="middle">
            <div className="product-name">{name}</div>
          </div>
        </div>
      </li>
    </NavLink>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categories,
    products: state.products,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),

  fetchProductsByCategory: category =>
    dispatch(fetchProductsByCategory(category)),

  fetchCategories: () => dispatch(fetchCategories()),

  searchProducts: searchTerm =>
    dispatch(searchForProductsInDatabase(searchTerm)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalog);
