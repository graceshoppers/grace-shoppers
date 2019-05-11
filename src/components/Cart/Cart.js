import React from 'react';

import {connect} from 'react-redux';
import CartList from './CartList';
import './Cart.css';
import CartCheckout from './CartCheckout';

const Cart = ({cart}) => {
  return (
    <div className="cart-container">
      <div className="row d-flex flex-row">
        <CartList cart={cart}/>
        <CartCheckout />
      </div>
    </div>
  );
};

const mapStateToProps = ({cart}) => ({cart});

export default connect(mapStateToProps)(Cart);
