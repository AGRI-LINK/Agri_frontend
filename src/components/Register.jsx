import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'farmer', // Default role
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registering user:', formData);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-[#00b207]  mb-6">Register</h1>
      <div className="bg-white shadow-md rounded p-4 max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Register as:</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="farmer"
                  checked={formData.role === 'farmer'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Farmer
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="buyer"
                  checked={formData.role === 'buyer'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Buyer
              </label>
            </div>
          </div>
          <button type="submit" className="bg-[#00b207]  text-white px-4 py-2 rounded hover:bg-green-700 w-full">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register; 