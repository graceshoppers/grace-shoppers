import React from 'react';

import Navbar from './Nav';
import Catalog from './Catalog';

import '../styles/Home.css';

const Home = props => {
  const {products} = props;
  return <Catalog products={products} />;
};

export default Home;
