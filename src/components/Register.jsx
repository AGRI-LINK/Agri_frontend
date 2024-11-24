import React, { useState } from 'react';
import { apiSignup } from '../services/auth';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      contact: formData.get('contact'),
      location: formData.get('location'),
      role: formData.get('role') // Default role
    };

    try {
      setLoading(true);

      const response = await apiSignup(payload);
      console.log(response); 

      if (response && response.status === 201) {
        navigate('/login'); // Navigate to login if signup is successful
      } else {
        console.error('Registration failed:', response);
      }
    } catch (error) {
      console.error('Registration Error:', error);
    } finally {
      setLoading(false);
    }
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
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Contact:</label>
            <input
              type="contact"
              name="contact"
              className="w-full p-2 border rounded"
              placeholder="Phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location:</label>
            <input
              type="location"
              name="location"
              className="w-full p-2 border rounded"
              placeholder="Location"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700"></label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="farmer"
                  className="mr-2"
                />
                Farmer
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="buyer"
                  className="mr-2"
                />
                Buyer
              </label>
            </div>
          </div>
          <button type="submit" className={`bg-[#00b207] text-white px-4 py-2 rounded hover:bg-green-700 w-full ${loading ? "cursor-wait" : "cursor-pointer"}`}
            disabled={loading}>
            {loading ? "Loading..." : "Register"}
          </button>

          <p className="text-center text-sm mt-5">
            Already have an account?{" "}
            <Link className="text-[#00b207]"
              to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register; 