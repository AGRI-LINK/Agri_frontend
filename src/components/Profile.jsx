import React, { useState, useEffect } from 'react';
import { apiGetProfile } from '../services/auth';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { MdCameraAlt } from 'react-icons/md';
import EditProfile from './EditProfile';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [images, setImages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiGetProfile();
        console.log(response.data);
        setProfile(response.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!profile) {
    return <div>Loading...</div>; // Display a loading message while fetching data
  }

  const { name, email } = profile;

  const getInitials = (name) => {
    const names = name.split(' ');
    return names.map(n => n.charAt(0).toUpperCase()).join('');
  };

  return (
    <div className="user-profile p-4">
      <div className="flex items-center">
        <label htmlFor="image-upload" className="cursor-pointer">
          <div className="relative">
            {images ? (
              <img src={images} alt="User" className="rounded-full w-24 h-24 mb-2" />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-2xl">
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
          <p className="text-sm text-gray-600">{email}</p>
        </div>
      </div>
      <span className="flex space-x-4 mt-4">
        <Link to="/">
          <FiLogOut />
        </Link>
      </span>
      <EditProfile user={profile} />
    </div>
  );
};

export default Profile; 