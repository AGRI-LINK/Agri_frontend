import React from 'react';
import { FaUser, FaShoppingBasket, FaClipboardList, FaChartLine } from 'react-icons/fa';

const DashboardCard = ({ icon, title, value }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-500 bg-opacity-75">
                {icon}
            </div>
            <div className="ml-4">
                <h3 className="mb-2 text-sm font-medium text-gray-600">{title}</h3>
                <p className="text-lg font-semibold text-gray-700">{value}</p>
            </div>
        </div>
    </div>
);

const Dashboard = ({ userType }) => {
    const isFarmer = userType === 'farmer';

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">{isFarmer ? 'Farmer' : 'Buyer'} Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <DashboardCard
                    icon={<FaUser className="h-6 w-6 text-white" />}
                    title="Profile Completion"
                    value="80%"
                />
                <DashboardCard
                    icon={<FaShoppingBasket className="h-6 w-6 text-white" />}
                    title={isFarmer ? "Products Listed" : "Orders Placed"}
                    value={isFarmer ? "15" : "8"}
                />
                <DashboardCard
                    icon={<FaClipboardList className="h-6 w-6 text-white" />}
                    title={isFarmer ? "Pending Orders" : "Wishlist Items"}
                    value={isFarmer ? "3" : "12"}
                />
                <DashboardCard
                    icon={<FaChartLine className="h-6 w-6 text-white" />}
                    title={isFarmer ? "Total Sales" : "Total Spent"}
                    value="$1,234"
                />
            </div>
            {/* Add more dashboard content here */}
        </div>
    );
};

export default Dashboard;