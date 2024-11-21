import React, { useState, useEffect } from 'react';
import { apiGetProfile } from '../services/users';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

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
      }
    };

    fetchData();
  }, []);

  if (!profile) {
    return <div>Loading...</div>; // Display a loading message while fetching data
  }

  const { name, email } = profile;

  return (
    <div className="user-profile p-4">
      {/* <h2 className="text-lg font-bold">Profile</h2> */}
      <span className="flex space-x-2"> <FaUserCircle className="text-2xl" />  <p className="font-semibold">{name}</p> </span>
      {/* {userImage && <img src={userImage} alt="User" className="rounded-full w-24 h-24 mb-2" />} */}
     <span className="flex space-x-4">
        <p className="text-sm text-gray-600 ml-1">{email}</p>
        <Link to="/">
          <FiLogOut />
        </Link>
     </span>
      
         
    </div>
  );
};

export default Profile; 