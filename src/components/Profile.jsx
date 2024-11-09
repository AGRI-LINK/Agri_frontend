import React, { useState } from 'react';

const Profile = () => {
  // Sample transaction data
  const [transactions] = useState([
    { id: 1, description: 'Sold 100kg of apples to Buyer A' },
    { id: 2, description: 'Bought 50kg of seeds from Supplier B' },
    // Add more transactions as needed
  ]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-[#00b207] mb-6">Your Profile</h1>
      <div className="bg-white shadow-md rounded p-4">
        <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="John Doe" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input type="email" className="w-full p-2 border rounded" placeholder="john@example.com" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Farm Location:</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="123 Farm Lane" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Farming Practices:</label>
          <textarea className="w-full p-2 border rounded" placeholder="Organic, Sustainable, etc."></textarea>
        </div>
        <button className="bg-[#00b207]  text-white px-4 py-2 rounded hover:bg-green-700">Save Changes</button>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
        <ul className="list-disc pl-5">
          {transactions.map(transaction => (
            <li key={transaction.id}>{transaction.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile; 