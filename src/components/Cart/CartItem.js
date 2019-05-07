import React from 'react';
import PropTypes from 'prop-types';
import parseCost from '../../shared/parse-cost';

const CartItem = props => {
  const {name, imageName, unitCost} = attributes;

  return (
    <div>
      <img src={imageName} />
      <div>{name}</div>
      <div>{parseCost(unitCost)}</div>
    </div>
  );
};

CartItem.propTypes = {
  attributes: PropTypes.object.isRequired,
};

export default CartItem;
