import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const CartButton = props => {
  //   const {numberOfCartItems} = props;

  return (
    <NavLink to="/cart" className="btn">
      <i className="fas fa-shopping-cart fa-lg" />

      <span className="badge badge-pill badge-primary">
        {/* {numberOfCartItems} */}
        99
      </span>
    </NavLink>
  );
};

// CartButton.propTypes = {
//   numberOfCartItems: PropTypes.number.isRequired || PropTypes.string.isRequired,
// };

export default CartButton;
