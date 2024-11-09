import React from 'react';

const ProductListing = ({ products, onEdit, onDelete }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Product Listings</h2>
      <ul className="list-disc pl-5">
        {products.map((product) => (
          <li key={product.id} className="mb-2">
            <div className="flex justify-between items-center">
              <span>{product.name} - {product.quantity} - {product.price}</span>
              {product.image && <img src={product.image} alt={product.name} className="h-16 w-16 object-cover rounded" />}
              <div>
                <button
                  onClick={() => onEdit(product)}
                  className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(product.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;