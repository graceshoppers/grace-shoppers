import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

const CartButton = ({cart}) => {
  const numberOfCartItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <NavLink to="/cart" className="btn">
      <i className="fas fa-shopping-cart fa-lg" />

      <span className="badge badge-pill badge-primary">
        {numberOfCartItems.toString()}
      </span>
    </NavLink>
  );
};

const mapStateToProps = ({cart}) => ({cart});

export default connect(mapStateToProps)(CartButton);
