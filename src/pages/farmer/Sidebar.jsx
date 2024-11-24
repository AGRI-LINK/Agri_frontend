import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlus, FaChartLine, FaEnvelope, FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { logout } from '../../services/config'
import Profile from '../../components/Profile';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
};
  return (
    <div className="h-full bg-[#00b207] text-white w-fit p-4 fixed flex flex-col justify-between">
      <section>
      <section className="mb-6">
        <div>
          <Link to="/" className="flex items-center justify-center hover:bg-green-700 p-2 rounded-lg">
          <h1 className="text-2xl font-bold text-white ">Farmer Dashboard</h1>
          </Link>
        </div>
        <div>
          <Profile />
        </div>
      </section>
      <section className="space-y-1">
        <div>
          <Link to="/dashboard" className="flex items-center hover:bg-green-700 p-2 rounded">
            <FaPlus className="mr-2" /> Dashboard
          </Link>
        </div>
        <div>
          <Link to="/addproduct" className="flex items-center hover:bg-green-700 p-2 rounded">
            <FaPlus className="mr-2" /> Add Products
          </Link>
        </div>
        <div>
          <Link to="/orderhistory" className="flex items-center hover:bg-green-700 p-2 rounded">
            <FaChartLine className="mr-2" /> Track Sales
          </Link>
        </div>
        <div>
          <Link to="/messages" className="flex items-center hover:bg-green-700 p-2 rounded">
            <FaEnvelope className="mr-2" /> Messages
          </Link>
        </div>
        
      </section>
      </section>
      <div>
          <button onClick={handleLogout}
                    className="flex items-center hover:bg-green-700 p-2 rounded">
            <FiLogOut className="mr-2" /> Logout
          </button>
        </div>
    </div>
  );
};

export default Sidebar;