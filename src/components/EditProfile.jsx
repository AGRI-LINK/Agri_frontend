import React, { useState } from 'react';
import { apiUpdateProfile } from '../services/users';


const EditProfile = ({ userId, initialContact, initialLocation, onProfileUpdate }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const contact = formData.get('contact');
    const location = formData.get('location');

    try {
      setLoading(true);
      // Make a PATCH request to update the user's profile
      const response = await apiUpdateProfile({ contact, location });

      if (response.status === 200) {
        console.log('Profile updated successfully');
        onProfileUpdate(response.data); // Call the onProfileUpdate callback with the updated profile data
      } else {
        console.error('Failed to update profile');
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
      <h1 className="text-3xl font-bold text-center text-[#00b207] mb-6">Edit Profile</h1>
      <div className="bg-white shadow-md rounded p-4 max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Contact:</label>
            <input
              type="text"
              name="contact"
              className="w-full p-2 border rounded"
              placeholder="Enter contact"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location:</label>
            <input
              type="text"
              name="location"
              className="w-full p-2 border rounded"
              placeholder="Enter location"
              required
            />
          </div>
          <button
            type="submit"
            className={`bg-[#00b207] text-white px-4 py-2 rounded hover:bg-green-700 w-full ${loading ? "cursor-wait" : "cursor-pointer"}`}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile; 