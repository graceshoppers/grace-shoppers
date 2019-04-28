import React from 'react';
import Navbar from './Nav';
import addToCart from '../redux-store/store';
import connect from 'react-redux';
import SingleProduct from './SingleProduct';
import {NavLink} from 'react-router-dom';

const Catalog = props => {
  const {products} = props;
  return (
    <div className="catalog-container">
      <ul>
        {products.map(product => {
          return (
            <NavLink to={`/products/${product.id}`} key={product.id}>
              <li>{product.name}</li>
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
