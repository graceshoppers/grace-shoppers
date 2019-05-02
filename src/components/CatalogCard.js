import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default ({attributes}) => {
  const {id, name, imageName} = attributes;

  return (
    <NavLink to={`/products/${id}`}>
      <li>
        <div className="product-container">
          <img src={imageName} className="catalog-img" name={imageName} />

          <div className="middle">
            <div className="product-name">{name}</div>
          </div>
        </div>
      </li>
    </NavLink>
  );
};
