import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const CartItemList = props => {
  const {cartItems} = props;
  return (
    <div>
      {cartItems.map(item => (
        <CartItem key={item.id} attributes={item} />
      ))}
    </div>
  );
};

CartItemList.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

CartItemList.defaultProps = {
  cartItems: [],
};

export default CartItemList;
