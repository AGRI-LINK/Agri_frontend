import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAuthToken, setUserRole } from '../services/config';
import { apiLogin } from '../services/auth';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const role = formData.get("role");

    try {
      setLoading(true);
      const loginResponse = await apiLogin({ email, password, role });
      console.log("Login Response:", loginResponse);

      if (loginResponse.status === 200) {
        const { token } = loginResponse.data;

        //store token
        setAuthToken(token);

        //store role from the form
        const selectedRole = role.toLowerCase();
        console.log("Selected Role:", selectedRole);

        //store role
        setUserRole(selectedRole);

        // Redirect based on role
        // if (role === 'farmer') {
        //   navigate('/farmer');
        // } else if (role === 'buyer') {
        //   navigate('/buyer');
        // }


        switch (selectedRole) {
          case "farmer":
            navigate("/farmer");
            break;
          case "buyer":
            navigate("/buyer");
            break;
          default:
            setError("Invalid user role");
            navigate("/");
        }
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError(error.response?.data?.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-[#00b207] mb-6">Login</h1>
      <div className="bg-white shadow-md rounded p-4 max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
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
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; 