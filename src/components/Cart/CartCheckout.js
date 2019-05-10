import React from 'react';
import {NavLink} from 'react-router-dom';

const CartCheckout = () => {
  return(
    <div className="col-md-4">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-12">
            <h3 className="shopping-cart-title">Checkout</h3>
            <div className="black-divider-thin" style={{margin: '2em 0'}} />
          </div>
          <div className="row justify-content-md-center">
            <div className="col">
              <button className="btn btn-success" type="submit">
                <NavLink to="/checkout">Checkout</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartCheckout;
