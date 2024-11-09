import React, { useState } from 'react';

const Notifications = () => {
  const [notifications] = useState([
    { id: 1, message: 'New message from Buyer A' },
    { id: 2, message: 'Your listing has been approved' },
    // Add more notifications as needed
  ]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Notifications</h1>
      <div className="bg-white shadow-md rounded p-4">
        <ul className="list-disc pl-5">
          {notifications.map(notification => (
            <li key={notification.id} className="mb-2">{notification.message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications; 