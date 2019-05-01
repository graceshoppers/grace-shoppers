import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Catalog.css';

import {connect} from 'react-redux';
import {
  fetchProducts,
  searchForProductsInDatabase,
} from '../redux-store/actions/product-actions';

class Catalog extends Component {
  componentDidMount() {
    const {location, match} = this.props;
    const urlArray = location.pathname.split('/');

    const filterKeyword = urlArray[urlArray.indexOf('catalog') + 1];

    if (!filterKeyword) this.props.fetchProducts();
    //
    else if (filterKeyword.toLowerCase() === 'search') {
      this.props.searchProducts(match.params.searchTerm);
    }
    //
    else {
      //   const categoryId = this.props.categories.find(
      //     ({name}) => name.toLowerCase() === filterKeyword
      //   );

      this.props.fetchProducts();
    }
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

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),

  searchProducts: searchTerm =>
    dispatch(searchForProductsInDatabase(searchTerm)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalog);
