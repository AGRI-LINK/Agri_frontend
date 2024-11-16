import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaChartLine, FaEnvelope, FaUserCircle } from 'react-icons/fa';
import Profile from '../../components/Profile';

const Sidebar = () => {
  return (
    <div className="h-full bg-[#00b207] text-white w-64 p-4 fixed">
      <ul className="space-y-4">
        <li>
          <Link to="/" className="flex items-center hover:bg-green-700 p-2 rounded-lg">
            <h1 className="text-2xl font-bold text-white mb-6">Farmer Dashboard</h1>
          </Link>
        </li>
        <li>
          <Profile />
        </li>
        <li>
          <Link to="/addproduct" className="flex items-center hover:bg-green-700 p-2 rounded">
            <FaPlus className="mr-2" /> Add Products
          </Link>
        </li>
        <li>
          <Link to="/orderhistory" className="flex items-center hover:bg-green-700 p-2 rounded">
            <FaChartLine className="mr-2" /> Track Sales
          </Link>
        </li>
        <li>
          <Link to="/messages" className="flex items-center hover:bg-green-700 p-2 rounded">
            <FaEnvelope className="mr-2" /> Messages
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;