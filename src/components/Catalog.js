import React from 'react';
import '../styles/Catalog.css';
import CatalogCard from './CatalogCard';

import {connect} from 'react-redux';

const Catalog = props => {
  const products = filterProducts(props.products, props.match);

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
};

const filterProducts = (productsArray, match) => {
  if (match.params.searchTerm)
    return productsArray.filter(product => product.name === 'Trinity Ring');
  else if (!match.params.category) return productsArray;
  else return productsArray.filter(product => product.categoryId === 1);
};

const mapStateToProps = ({products}) => ({products});

export default connect(mapStateToProps)(Catalog);
