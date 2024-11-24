// import React from 'react';

// const ShoppingCart = ({ cartItems, removeItemFromCart }) => {
//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Shopping Cart</h1>
//       <div className="bg-white shadow-md rounded p-4">
//         {cartItems.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <ul className="list-disc pl-5">
//             {cartItems.map(item => (
//               <li key={item.id} className="mb-2">
//                 <div className="flex justify-between items-center">
//                   <span>{item.name} - ${item.price}</span>
//                   <button
//                     onClick={() => removeItemFromCart(item.id)}
//                     className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart; 

import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div className="flex items-center justify-between p-4 border-b">
    <div className="flex items-center">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
      </div>
    </div>
    <div className="flex items-center">
      <button
        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
        className="p-1 rounded-full hover:bg-gray-200"
      >
        <FaMinus className="text-gray-600" />
      </button>
      <span className="mx-2 w-8 text-center">{item.quantity}</span>
      <button
        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        className="p-1 rounded-full hover:bg-gray-200"
      >
        <FaPlus className="text-gray-600" />
      </button>
      <button
        onClick={() => onRemove(item.id)}
        className="ml-4 p-1 rounded-full hover:bg-red-100"
      >
        <FaTrash className="text-red-500" />
      </button>
    </div>
  </div>
);

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCartItems([]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className='py-24'>
    <div className="bg-white shadow-lg rounded-lg max-w-md mx-auto ">
      <div className="bg-green-500 text-white py-4 px-6 rounded-t-lg flex justify-between items-center">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <FaShoppingCart className="text-2xl" />
      </div>
      <div className="p-6">
        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <FaShoppingCart className="text-gray-300 text-5xl mx-auto mb-4" />
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            ))}
          </div>
        )}
        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total Items:</span>
            <span className="font-bold text-lg">{totalItems}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total Cost:</span>
            <span className="font-bold text-lg">${totalCost.toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ShoppingCart;