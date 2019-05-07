import React from 'react';
import {NavLink} from 'react-router-dom';

export default () => (
  <ul className="navbar-nav">
    <NavLink to="/catalog/rings" className="navbar-brand">
      Rings
    </NavLink>
    <NavLink to="/catalog/earrings" className="navbar-brand">
      Earrings
    </NavLink>
    <NavLink to="/catalog/bracelets" className="navbar-brand">
      Bracelets
    </NavLink>
    <NavLink to="/catalog/necklaces" className="navbar-brand">
      Necklaces
    </NavLink>
  </ul>
);
