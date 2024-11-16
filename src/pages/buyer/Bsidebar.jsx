import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaUser, FaHeart, FaEnvelope } from 'react-icons/fa';
import Profile from '../../components/Profile';

const Bsidebar = ({ orders }) => {
  return (
    <div className="h-full bg-[#00b207]  text-white w-64 p-4 fixed overflow-y-auto">
      <div className="mb-6">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold">Buyer Dashboard</span>
        </Link>
      </div>
      <ul className="space-y-4">
        <li>
          <Link to="/profile">
            <Profile />
          </Link>
        </li>
        <li>
          <Link to="/products" className="flex items-center hover:bg-green-700 p-2 rounded">
            <FaHome className="mr-2" /> Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="flex items-center hover:bg-green-300 p-2 rounded">
            <FaShoppingCart className="mr-2" /> Shopping Cart
          </Link>
        </li>
        <li>
          <Link to="/wishlist" className="flex items-center hover:bg-green-700 p-2 rounded">
            <FaHeart className="mr-2" /> Wishlist
          </Link>
        </li>
        <li>
          <Link to="/messages" className="flex items-center hover:bg-green-500 p-2 rounded">
            <FaEnvelope className="mr-2" /> Messages
          </Link>
        </li>
        <li>
          <Link to="/buyer/account" className="flex items-center hover:bg-green-700 p-2 rounded">
            <FaUser className="mr-2" /> Order History
          </Link>
        </li>
      </ul>
      {/* <div className="mt-6">
        <OrderHistory orders={orders} />
      </div> */}
    </div>
  );
};

export default Bsidebar; 