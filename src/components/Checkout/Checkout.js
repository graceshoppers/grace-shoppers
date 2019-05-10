import React from 'react';
import {connect} from 'react-redux';

import CartItem from '../Cart/CartItem';
import parseCost from '../../shared/parse-cost';

const Checkout = props => {
  const {cart, users} = props;
  const totalCost = cart.reduce(
    (subtotal, item) => subtotal + item.unitCost * item.quantity,
    0
  );

  return (
    <div className="container">
      <div className="panel panel-info">
        <h3 className="panel-heading">Shipping Address</h3>
        <div className="panel-body">
          <p>
            user.name
            <br />
            user.address
            <br />
            <button className="btn">Change</button>
          </p>
        </div>
      </div>

      <div className="panel panel-info">
        <h3 className="panel-heading">Payment Method</h3>
        <div className="panel-body">
          <p>
            user.name
            <br />
            user.address
            <br />
            <button className="btn">Change</button>
          </p>
        </div>
      </div>

      <div>
        <h3 className="panel-heading">Shopping Cart</h3>
        <div className="black-divider-thin" style={{margin: '2em 0 0'}} />
        {cart.map((item, index) => (
          <CartItem
            key={item.id}
            attributes={item}
            displayTopBorder={index === 0 ? false : true}
          />
        ))}
        <div className="black-divider-thick" style={{margin: '2em 1.5em 0'}} />
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
      <button>Place your order</button>
    </div>
  );
};

const mapStateToProps = ({cart}) => ({cart});

export default connect(mapStateToProps)(Checkout);
