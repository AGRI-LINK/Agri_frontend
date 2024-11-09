import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('farmer'); // Default role
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic
    console.log('Logging in as:', role);

    // Redirect based on role
    if (role === 'farmer') {
      navigate('/farmer');
    } else if (role === 'buyer') {
      navigate('/buyer');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-[#00b207] mb-6">Login</h1>
      <div className="bg-white shadow-md rounded p-4 max-w-md mx-auto">
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Login as:</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="farmer"
                  checked={role === 'farmer'}
                  onChange={(e) => setRole(e.target.value)}
                  className="mr-2"
                />
                Farmer
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="buyer"
                  checked={role === 'buyer'}
                  onChange={(e) => setRole(e.target.value)}
                  className="mr-2"
                />
                Buyer
              </label>
            </div>
          </div>
          <button type="submit" className="bg-[#00b207] text-white px-4 py-2 rounded hover:bg-green-700 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; 