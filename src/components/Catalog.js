import React from 'react';
import Navbar from './Nav';
import addToCart from '../redux-store/store';
import connect from 'react-redux';
import SingleProduct from './SingleProduct';
import {NavLink} from 'react-router-dom';

import '../styles/Catalog.css';

const Catalog = props => {
  const {products} = props;

  return (
    <div className="overflow-container">
      <ul className="column-list">
        {products.map(product => {
          return (
            <NavLink to={`/products/${product.id}`} key={product.id}>
              <li>
                <div className="product-container">
                  <img
                    src={product.imageName}
                    className="catalog-img"
                    name={product.imageName}
                  />

                  <div className="middle">
                    <div className="product-name">{product.name}</div>
                  </div>
                </div>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     products: state.products
//   };
// };

// export default connect(mapStateToProps)(Catalog);

export default Catalog;
