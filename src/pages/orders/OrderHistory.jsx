import React from 'react';

const OrderHistory = ({ orders = [] }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      <ul className="list-disc pl-5">
        {orders.map((order) => (
          <li key={order.id} className="mb-2">
            <div className="flex justify-between items-center">
              <span>Order #{order.id} - {order.date} - {order.total}</span>
              <button className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700">
                View Details
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory; 