import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

// import ProductListing from '../products/ProductListing';
import Bsidebar from './Bsidebar';

const BuyerDashboard = () => {
  const [products, setProducts] = useState([]); 

  return (
    <div className="flex">
      <Bsidebar />
      <div className="flex-1 ml-64 p-6">
        {/* <ProductListing products={products} /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default BuyerDashboard;