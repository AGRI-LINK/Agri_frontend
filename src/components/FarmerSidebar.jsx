import React from 'react';
import { Link } from 'react-router-dom';

const FarmerSidebar = () => {
    return (
        <div className="sidebar">
            <h2>Farmer Dashboard</h2>
            <ul>
                <li><Link to="/farmer">Home</Link></li>
                <li><Link to="/farmer/products">Products</Link></li>
                <li><Link to="/farmer/settings">Settings</Link></li>
            </ul>
        </div>
    );
};

export default FarmerSidebar; 