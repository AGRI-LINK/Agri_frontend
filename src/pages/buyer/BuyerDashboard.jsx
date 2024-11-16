import React, { useState } from 'react';
import ProductListing from '../products/ProductListing';
import Bsidebar from './Bsidebar';
import Profile from '../../components/Profile';

const BuyerDashboard = () => {
  const [products, setProducts] = useState([]); 

  return (
    <div className="flex">
      <Bsidebar />
      <div className="flex-1 ml-64 p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Buyer Dashboard</h1>
        <ProductListing products={products} />
      </div>
    </div>
  );
};

export default BuyerDashboard;