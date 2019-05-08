import React from 'react';
import {NavLink} from 'react-router-dom';

import {connect} from 'react-redux';
import parseCost from '../../shared/parse-cost';
import CartItem from './CartItem';
import './Cart.css';

const Cart = ({cart}) => {
  const totalCost = cart.reduce(
    (subtotal, item) => subtotal + item.unitCost * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="row d-flex flex-row">
        {/*
        ------------------
        Shopping cart list
        ------------------
        */}
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
        {/*
        ----------------
        Checkout section
        ----------------
        */}
        <div className="col-md-4">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-md-12">
                <h3 className="shopping-cart-title">Checkout</h3>
                <div className="black-divider-thin" style={{margin: '2em 0'}} />
              </div>
              <div className="row justify-content-md-center">
                <div className="col">
                  <button className="btn btn-success">
                    <NavLink to="/checkout">Checkout</NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({cart}) => ({cart});

export default connect(mapStateToProps)(Cart);
