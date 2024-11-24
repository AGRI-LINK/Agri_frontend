import React, { useState } from 'react';
import Sidebar from './FarmerSidebar';
import AddProduct from '../products/AddProduct';
import ProductListing from '../products/ProductListing';
import { Outlet } from 'react-router-dom';


const FarmerDashboard = () => {
  const [products, setProducts] = useState([]);

  const handleEdit = (product) => {
    // Logic to edit the product
  };

  const handleDelete = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default FarmerDashboard;