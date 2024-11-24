import React, { useState, useEffect } from 'react';
import { apiGetProfile, apiUpdateProfile } from '../services/users';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { MdCameraAlt } from 'react-icons/md';
import EditProfile from './EditProfile';
import { apiUpdateProductbyId } from '../services/products';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [images, setImages] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiGetProfile();
        console.log(response.data);
        setProfile(response.data.user);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("Failed to load profile. Please try again.");
        setProfile(null); // optional: handling error fallback..
      }
    };

    fetchData();
  }, []);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages(reader.result);
      };
      reader.readAsDataURL(file);
      const formData = new FormData()
      formData.append("profilePic", file)
      const response = await apiUpdateProfile(formData);
      console.log(response.data)
    }
  };

  if (error) {
    return <div className = "text-red-500">{error}</div>;
  };

  if (!profile) {
    return <div>Loading... </div>; // Display a loading message while fetching data...
  };

  const { name = "Unknown User", email = "No Email Provided" } = profile;

  const getInitials = (name) => {
    const names = name.split(' ');
    return names.map(n => n.charAt(0).toUpperCase()).join('');
  };

  return (
    <div className="user-profile p-2">
      <div className="flex items-center">
        <label htmlFor="image-upload" className="cursor-pointer">
          <div className="relative">
            {images ? (
              <img src={images} alt="User" className="rounded-full w-16 h-16 mb-2" />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-2xl">
                {getInitials(name)}
              </div>
            )}
            <MdCameraAlt className="absolute bottom-0 right-0 text-2xl text-gray-600" />
          </div>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
        <div className="ml-4">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-sm ">{email}</p>
        </div>
      </div>

      {/* <EditProfile user={profile} /> */}
    </div>
  );
};

export default Profile; 