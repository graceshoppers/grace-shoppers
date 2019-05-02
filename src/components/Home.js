import React from 'react';

import Navbar from './Nav';
import Catalog from './Catalog';

import '../styles/Home.css';

const Home = props => {
  const {products} = props;
  return (
    <div className="home-page">
      <div className="center">
        <div className="horizontal-flip">K</div>BMK
      </div>
    </div>
  );
};

export default Home;
