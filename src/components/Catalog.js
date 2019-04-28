import React from 'react';
import Navbar from './Nav';
import addToCart from '../redux-store/store';
import connect from 'react-redux';
import SingleProduct from './SingleProduct';
import Link from 'react-router-dom';

const Catalog = props => {
  const {products} = props;
  return (
    <div>
      <ul>
        {products.map(product => {
          console.log(product)
          return (
            <Link to={`/products/${product.id}`} key={product.id}>
              <li>{product.name}</li>
            </Link>
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
