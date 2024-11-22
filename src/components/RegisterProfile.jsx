import React, { useState, useEffect } from 'react';
import { apiSignup, apiGetProfile, apiUpdateProfile } from '../services/auth'; // Ensure this line is correct
import { useNavigate, Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { MdCameraAlt } from 'react-icons/md';
import EditProfile from './EditProfile';

const RegisterProfile = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState(null);
    const [profilePic, setProfilePic] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        contact: '',
        location: '',
        role: 'buyer', // Default role
    });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await apiGetProfile();
                setProfile(response.data.user);
                setFormData({
                    name: response.data.user.name,
                    email: response.data.user.email,
                    contact: response.data.user.contact,
                    location: response.data.user.location,
                    role: response.data.user.role,
                });
            } catch (error) {
                console.log(error);
            }
        };

        fetchProfile();
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (profile) {
                // Update profile
                await apiUpdateProfile(formData);
                console.log('Profile updated successfully');
            } else {
                // Register new user
                await apiSignup(formData);
                console.log('Registration successful');
                navigate('/login'); // Redirect to login after successful registration
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!profile) {
        return (
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold text-center text-[#00b207] mb-6">Register</h1>
                <form onSubmit={handleSubmit}>
                    {/* Registration Form Fields */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
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
                            value={formData.email}
                            onChange={handleChange}
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
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Contact:</label>
                        <input
                            type="text"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            placeholder="Phone number"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Location:</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            placeholder="Location"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Role:</label>
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
                    <button type="submit" className={`bg-[#00b207] text-white px-4 py-2 rounded hover:bg-green-700 w-full ${loading ? "cursor-wait" : "cursor-pointer"}`} disabled={loading}>
                        {loading ? "Loading..." : "Register"}
                    </button>
                </form>
            </div>
        );
    }

    // If profile exists, show profile details and edit option
    return (
        <div className="user-profile p-4">
            <div className="flex items-center">
                <label htmlFor="image-upload" className="cursor-pointer">
                    <div className="relative">
                        {image ? (
                            <img src={image} alt="User" className="rounded-full w-24 h-24 mb-2" />
                        ) : (
                            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-2xl">
                                {getInitials(profile.name)}
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
                    <h2 className="text-lg font-bold">{profile.name}</h2>
                    <p className="text-sm text-gray-600">{profile.email}</p>
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

const getInitials = (name) => {
    const names = name.split(' ');
    return names.map(n => n.charAt(0).toUpperCase()).join('');
};

export default RegisterProfile; 