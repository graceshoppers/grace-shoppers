import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import parseCost from '../../shared/parse-cost';

import './Cart.css';

const CartItem = props => {
  const {attributes, displayTopBorder} = props;
  const {name, imageName, unitCost} = attributes;

  return (
    <div
      className={`media cart-item${
        displayTopBorder ? ' top-lightgrey-border' : ''
      }`}
    >
      <img src={imageName} className="cart-image mr-3" />
      <div className="media-body">
        <div className="container">
          <div className="row d-flex flex-row align-items-center">
            <Link to="#" className="col-md-10">
              {name}
            </Link>
            <div className="col-md-2 d-flex flex-row-reverse">
              {`${parseCost(unitCost)}`}
            </div>
          </div>
          <div className="row d-flex flex-row align-items-center cart-item-options">
            <div className="col-md-2">Delete</div>
            <div className="col-md-4">Save for later</div>
            <div className="col-md-3" />
            <div className="col-md-3 d-flex flex-row-reverse">Quantity: 1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CartItem.propTypes = {
//   attributes: PropTypes.object.isRequired,
// };

export default CartItem;
