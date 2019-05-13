import React from 'react';
import {NavLink} from 'react-router-dom';

import './Home.css';

const Home = props => {
  return (
    <div className="row home-page d-flex flex-column justify-content-center align-self-center">
      <div
        style={{
          paddingBottom: '-50px',
          marginBottom: '-100px',
          display: 'inline-block',
        }}
      >
        <div className="horizontal-flip">K</div>BMK
      </div>
      <h1>Fine Jewelry</h1>
      <img
        src="line.jpg"
        style={{
          height: '200px',
          width: '600px',
          display: 'inline-block',
          marginTop: '-70px',
          marginBottom: '-50px',
        }}
      />
      <NavLink
        to="/catalog/rings"
        style={{padding: '0px', margin: '0px', fontSize: '20px'}}
      >
        <button className="collection-link">Explore Our Collections</button>
      </NavLink>
    </div>
  );
};
export default Home;
