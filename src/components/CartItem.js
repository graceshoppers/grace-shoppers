import React from 'react';
import {Link} from 'react-router-dom';

export default ({item, displayTopBorder}) => {
  const {name, imageName, unitCost} = item;

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

export const parseCost = cost => {
  let [dollars, cents] = `${cost.toFixed(2)}`.split('.');
  dollars = reverseString(dollars)
    .match(/.{1,3}/g)
    .reverse()
    .map(digits => reverseString(digits))
    .join(',');
  return `$${dollars}.${cents}`;
};

const reverseString = str =>
  str
    .split('')
    .reverse()
    .join('');
