import React from 'react';
import {NavLink} from 'react-router-dom';

import './Home.css';

const Home = props => {
  return (
    <div className="row home-page d-flex flex-column justify-content-center align-self-center">
      <div
        style={{
          paddingBottom: '-150px',
          marginBottom: '-200px',
          display: 'inline-block',
        }}
      >
        <div className="horizontal-flip">K</div>BMK
      </div>
      <img
        src="line.jpg"
        style={{
          height: '200px',
          width: '600px',
          display: 'inline-block',
          marginBottom: '-50px',
        }}
      />
      <h3>Fine Jewelry</h3>
      <NavLink to="/catalog/rings" style={{padding:'0px',margin:'0px',fontSize:'20px'}}>
        <button className="collection-link">Explore Our Collections</button>
      </NavLink>
    </div>
  );
};
export default Home;
