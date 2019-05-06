import React from 'react';

import Navbar from './NavBar/Navbar';
import Catalog from './Catalog/Catalog';

import '../styles/Home.css';

const Home = props => {
  const {products} = props;
  return (
    <div className="row home-page d-flex justify-content-center align-self-center">
      <div>
        <div className="horizontal-flip">K</div>BMK
      </div>
    </div>
  );
};
export default Home;
