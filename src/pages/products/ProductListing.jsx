// src/components/products/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

function ProductListing() {
  // This would normally come from an API
  const sampleProducts = [
    {
      id: 1,
      name: "Fresh Tomatoes",
      category: "Vegetables",
      price: 2.99,
      quantity: 100,
      location: "Nairobi, Kenya",
      image: "tomato-image-url"
    },
    // Add more sample products...
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Available Products</h2>
        <div className="flex space-x-4">
          <select className="border border-gray-300 rounded-lg px-4 py-2">
            <option>Sort by Price</option>
            <option>Lowest to Highest</option>
            <option>Highest to Lowest</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-4 py-2">
            <option>Filter by Category</option>
            <option>Vegetables</option>
            <option>Fruits</option>
            <option>Grains</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sampleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListing;