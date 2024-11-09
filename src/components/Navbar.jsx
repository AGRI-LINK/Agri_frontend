import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaList, FaEnvelope, FaMap, FaCreditCard, FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartItemCount }) => {
  return (
    <nav className="bg-[#00b207] text-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/" className="flex items-center">
            <img src="/path/to/logo.png" alt="AgriLink Logo" className="h-8 mr-2" />
            {/* Optionally, you can include text here if needed */}
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link to="/profile" className="hover:bg-green-700 px-3 py-2 rounded flex items-center">
            <FaUser size={20} />
          </Link>
          <Link to="/products" className="hover:bg-green-700 px-3 py-2 rounded flex items-center">
            <FaList size={20} />
          </Link>
          <Link to="/messages" className="hover:bg-green-700 px-3 py-2 rounded flex items-center">
            <FaEnvelope size={20} />
          </Link>
          <Link to="/map" className="hover:bg-green-700 px-3 py-2 rounded flex items-center">
            <FaMap size={20} />
          </Link>
          <Link to="/payment" className="hover:bg-green-700 px-3 py-2 rounded flex items-center">
            <FaCreditCard size={20} />
          </Link>
          <Link to="/cart" className="hover:bg-green-700 px-3 py-2 rounded flex items-center relative">
            <FaShoppingCart size={20} />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
