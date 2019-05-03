import React from 'react';
import '../styles/Catalog.css';
import CatalogCard from './CatalogCard';

import {connect} from 'react-redux';

const Catalog = props => {
  const products = filterProducts(props.products, props.match);

  return (
    <div className="overflow-container row">
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
};

const filterProducts = (productsArray, match) => {
  if (!productsArray.length) return productsArray;

  if (match.params.searchTerm)
    return searchProducts(productsArray, match.params.searchTerm);
  //
  else if (!match.params.category) return productsArray;
  //
  else
    return productsArray.filter(
      product =>
        product.category.name.toLowerCase() ===
        match.params.category.toLowerCase()
    );
};

const searchProducts = (productsArray, searchTerm) => {
  const fields = ['name', 'material'];
  let f;

  const array = productsArray.filter(product => {
    for (let i = 0; i < fields.length; i++) {
      f = fields[i];
      if (product[f].toLowerCase().includes(searchTerm.toLowerCase()))
        return true;
    }
    return false;
  });

  return array;
};

const mapStateToProps = ({products}) => ({products});

export default connect(mapStateToProps)(Catalog);
