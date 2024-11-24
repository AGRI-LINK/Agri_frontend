import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaUser, FaHeart, FaEnvelope } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { logout } from '../../services/config'
import Profile from '../../components/Profile';
import { MdSpaceDashboard } from 'react-icons/md';

const Bsidebar = ({ orders }) => {
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
          <h1 className="text-2xl font-bold text-white ">Buyer Dashboard</h1>
          </Link>
        </div>
        <div>
          <Profile />
        </div>
      </section>
      <section className="space-y-1">
        <div>
          <Link to="/buyerdashboard/" className="flex items-center hover:bg-green-700 p-2 rounded">
            <MdSpaceDashboard className="mr-2" /> Dashboard
          </Link>
        </div>
        <div>
          <Link to="/buyerdashboard/products" className="flex items-center hover:bg-green-700 p-2 rounded">
            <FaHome className="mr-2" /> Products
          </Link>
        </div>
        <div>
          <Link to="/buyerdashboard/cart" className="flex items-center hover:bg-green-300 p-2 rounded">
            <FaShoppingCart className="mr-2" /> Shopping Cart
          </Link>
        </div>
        <div>
          <Link to="/buyerdashboard/wishlist" className="flex items-center hover:bg-green-700 p-2 rounded">
            <FaHeart className="mr-2" /> Wishlist
          </Link>
        </div>
        <div>
          <Link to="/buyerdashboard/messages" className="flex items-center hover:bg-green-500 p-2 rounded">
            <FaEnvelope className="mr-2" /> Messages
          </Link>
        </div>
        <div>
          <Link to="/buyerdashboard/orderhist" className="flex items-center hover:bg-green-700 p-2 rounded">
            <FaUser className="mr-2" /> Order History
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
      {/* <div className="mt-6">
        <OrderHistory orders={orders} />
      </div> */}
    </div>
  );
};

export default Bsidebar; 