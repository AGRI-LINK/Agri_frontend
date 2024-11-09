// src/components/products/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative pb-[60%]">
        <img
          src={product.image}
          alt={product.name}
          className="absolute h-full w-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <div className="flex items-center mt-2">
          <span className="bg-wheat text-soil px-2 py-1 rounded-full text-sm">
            {product.category}
          </span>
        </div>

        <div className="mt-3">
          <p className="text-leaf text-lg font-bold">${product.price}/kg</p>
          <p className="text-gray-600">Available: {product.quantity}kg</p>
        </div>

        <div className="mt-3 text-sm text-gray-500">
          <p className="flex items-center">
            <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {product.location}
          </p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <Link
            to={`/products/${product.id}`}
            className="bg-leaf text-white px-4 py-2 rounded-lg hover:bg-forest transition-colors duration-300"
          >
            View Details
          </Link>
          <button className="text-leaf hover:text-forest">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;