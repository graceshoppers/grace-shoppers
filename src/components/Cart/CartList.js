import React from 'react';
import CartItem from './CartItem';
import parseCost from '../../shared/parse-cost';

const CartList = ({cart}) => {
  const totalCost = cart.reduce(
    (subtotal, item) => subtotal + item.unitCost * item.quantity,
    0
  );
  return(
    <div className="col-md-8">
      <h3 className="shopping-cart-title">Shopping Cart</h3>
      <div className="black-divider-thin" style={{margin: '2em 1.5em 0'}} />
      {cart.map((item, index) => (
        <CartItem
          key={`${item.id}-${index}`}
          attributes={item}
          displayTopBorder={index === 0 ? false : true}
        />
      ))}
      <div
        className="black-divider-thick"
        style={{margin: '2em 1.5em 0'}}
      />
      {/*
      -------------
      Total section
      -------------
      */}
      <div className="container">
        <div className="row d-flex flex-row">
          <div className="col-md-9">
            <h3 className="shopping-cart-title">Total</h3>
          </div>
          <div
            className="col-md-2 d-flex flex-row-reverse"
            style={{marginLeft: '19px'}}
          >
            <h5 className="shopping-cart-title">{`${parseCost(
              totalCost
            )}`}</h5>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CartList;
