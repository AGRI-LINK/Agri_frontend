import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaList, FaEnvelope, FaMap, FaCreditCard, FaShoppingCart } from 'react-icons/fa';
import agrilogo from "../assets/images/agri.svg"

const Navbar = ({ cartItemCount }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed w-full bg-[#00b207] text-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/" className="flex items-center">
            <img src={agrilogo} alt="AgriLink Logo" className="h-10 w-10" />
          </Link>
        </div>
        <div className="flex space-x-6">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:bg-green-700 px-3 py-2 rounded flex items-center"
            >
              <FaUser size={20} /> Account
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <Link
                  to="/login"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
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
