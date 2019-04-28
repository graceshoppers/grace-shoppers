import React from 'react';

import Navbar from './Nav';
import Catalog from './Catalog';

const Home = props => {
  const {products} = props;
  return (
    <div className="master-container">
      <Navbar />
      <Catalog products={products} />
    </div>
  );
};

export default Home;
