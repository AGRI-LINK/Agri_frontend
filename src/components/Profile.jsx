import React, { useState, useEffect } from 'react';
import { apiGetProfile } from '../services/users';
import { toast } from 'react-toastify';
import { FiLogOut } from 'react-icons/fi';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiGetProfile();
        console.log(response.data);
        setProfile(response.data.user);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };

    fetchData();
  }, []);

  if (!profile) {
    return <div>Loading...</div>; // Display a loading message while fetching data
  }

  const { name, email } = profile;

  return (
    <div className="user-profile p-4 border rounded shadow">
      <h2 className="text-lg font-bold">Profile</h2>
      {/* {userImage && <img src={userImage} alt="User" className="rounded-full w-24 h-24 mb-2" />} */}
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-gray-600">{email}</p>
      <div>
        <button className="flex">
          <FiLogOut />
        </button>
      </div>
    </div>
  );
};

export default Profile; 