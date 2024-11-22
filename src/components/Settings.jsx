import React from 'react';
import EditProfile from './EditProfile';
import { useTheme } from '../context/ThemeContext';

const Settings = ({ user }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`container mx-auto p-6 ${theme}`}>
            <h1 className="text-3xl font-bold mb-6">Settings</h1>
            <div className="flex items-center mb-4">
                {user.image ? (
                    <img src={user.image} alt="Profile" className="w-32 h-32 rounded-full" />
                ) : (
                    <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-2xl">
                        {getInitials(user.name)}
                    </div>
                )}
                <div className="ml-4">
                    <h2 className="text-xl font-semibold">{user.name}</h2>
                    <p className="text-gray-600">{user.email}</p>
                </div>
            </div>
            <EditProfile user={user} />
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Theme</h2>
                <button onClick={toggleTheme} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
                </button>
            </div>
        </div>
    );
};

const getInitials = (name) => {
    const names = name.split(' ');
    return names.map(n => n.charAt(0).toUpperCase()).join('');
};

export default Settings;