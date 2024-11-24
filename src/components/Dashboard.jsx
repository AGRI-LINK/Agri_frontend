// import React from 'react';
// import { FaUser, FaShoppingBasket, FaClipboardList, FaChartLine } from 'react-icons/fa';

// const DashboardCard = ({ icon, title, value }) => (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//         <div className="flex items-center">
//             <div className="p-3 rounded-full bg-green-500 bg-opacity-75">
//                 {icon}
//             </div>
//             <div className="ml-4">
//                 <h3 className="mb-2 text-sm font-medium text-gray-600">{title}</h3>
//                 <p className="text-lg font-semibold text-gray-700">{value}</p>
//             </div>
//         </div>
//     </div>
// );

// const Dashboard = ({ userType }) => {
//     const isFarmer = userType === 'farmer';

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h1 className="text-2xl font-bold mb-6">{isFarmer ? 'Farmer' : 'Buyer'} Dashboard</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 <DashboardCard
//                     icon={<FaUser className="h-6 w-6 text-white" />}
//                     title="Profile Completion"
//                     value="80%"
//                 />
//                 <DashboardCard
//                     icon={<FaShoppingBasket className="h-6 w-6 text-white" />}
//                     title={isFarmer ? "Products Listed" : "Orders Placed"}
//                     value={isFarmer ? "15" : "8"}
//                 />
//                 <DashboardCard
//                     icon={<FaClipboardList className="h-6 w-6 text-white" />}
//                     title={isFarmer ? "Pending Orders" : "Wishlist Items"}
//                     value={isFarmer ? "3" : "12"}
//                 />
//                 <DashboardCard
//                     icon={<FaChartLine className="h-6 w-6 text-white" />}
//                     title={isFarmer ? "Total Sales" : "Total Spent"}
//                     value="$1,234"
//                 />
//             </div>
//             {/* Add more dashboard content here */}
//         </div>
//     );
// };

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import FarmerSidebar from '../pages/farmer/FarmerSidebar';
import BuyerSidebar from '../pages/buyer/BuyerSidebar';
import { apiGetProfile } from '../services/users';

const Dashboard = () => {
    const [userRole, setUserRole] = useState(null); // Track user role ('farmer' or 'buyer')
    const [userName, setUserName] = useState(''); // Track user's name

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await apiGetProfile();
                const user = response.data.user;
                setUserName(user.name); // Set user's name
                setUserRole(user.role); // Assumes `user.role` is either 'farmer' or 'buyer'
            } catch (error) {
                console.error('Error fetching user profile:', error);
                setUserRole(null); // Handle errors (e.g., redirect to login)
            }
        };

        fetchUserData();
    }, []);

    if (!userRole) {
        return <div>Loading...</div>; // Show a loading message while data is being fetched
    }

    return (
        <div className="flex">
            {/* Sidebar based on user role */}
            {/* {userRole === 'farmer' ? <FarmerSidebar /> : <BuyerSidebar />} */}

            {/* Main dashboard content */}
            <main className="flex-1 pl-2 pr-8 pt-4 pb-8">
                <div className="bg-white p-6 shadow-md mb-6">
                    <h1 className="text-3xl font-semibold mb-2">
                        Welcome {userRole === 'farmer' ? 'Farmer' : 'Buyer'}, {userName}!
                    </h1>
                    <p className="text-gray-600">Manage and track your activities with ease.</p>
                </div>
            </main>
            {/* <div className="flex-1 ml-64 p-6"> */}
                {/* <h1 className="text-3xl font-bold"> */}
                    {/* Welcome {userRole === 'farmer' ? 'Farmer' : 'Buyer'}, {userName}! */}
                {/* </h1> */}
                {/* <div className="mt-6"> */}
                    {/* Dynamic activities based on role */}
                    {/* {userRole === 'farmer' ? ( */}
                        {/* <FarmerActivities /> */}
                    {/* ) : ( */}
                        {/* <BuyerActivities /> */}
                    {/* )} */}
                {/* </div> */}
            {/* </div> */}
        </div>
    );
};

const FarmerActivities = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Your Activities:</h2>
            <ul className="list-disc ml-6">
                <li>Track your sales</li>
                <li>Add or manage your products</li>
                <li>Respond to messages from buyers</li>
                <li>Monitor orders and delivery statuses</li>
            </ul>
        </div>
    );
};

const BuyerActivities = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Your Activities:</h2>
            <ul className="list-disc ml-6">
                <li>Browse products</li>
                <li>Manage your shopping cart</li>
                <li>View and edit your wishlist</li>
                <li>Check your order history</li>
            </ul>
        </div>
    );
};

export default Dashboard;
