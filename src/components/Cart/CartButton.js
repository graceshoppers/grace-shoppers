import React from 'react';
import {NavLink} from 'react-router-dom';

const CartButton = () => {
  return (
    <NavLink to="/cart" className="btn">
      <i className="fas fa-shopping-cart fa-lg" />
    </NavLink>
  );
};

export default CartButton;
