import React from 'react';

const ShoppingCart = ({ cartItems, removeItemFromCart }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Shopping Cart</h1>
      <div className="bg-white shadow-md rounded p-4">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="list-disc pl-5">
            {cartItems.map(item => (
              <li key={item.id} className="mb-2">
                <div className="flex justify-between items-center">
                  <span>{item.name} - ${item.price}</span>
                  <button
                    onClick={() => removeItemFromCart(item.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart; 