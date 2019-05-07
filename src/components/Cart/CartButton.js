import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

const CartButton = ({cart}) => {
  return (
    <NavLink to="/cart" className="btn">
      <i className="fas fa-shopping-cart fa-lg" />

      <span className="badge badge-pill badge-primary">{cart.length}</span>
    </NavLink>
  );
};

const mapStateToProps = ({cart}) => ({cart});

export default connect(mapStateToProps)(CartButton);
