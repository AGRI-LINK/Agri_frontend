import React from 'react'

const ProductDetails = ({product}) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={`https://savefiles.org/${product.images}?shareable_link=530`} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <p className="text-lg font-semibold mb-2">Price: ¢{product.price}</p>
      <p className="text-lg font-semibold mb-2">Quantity:{product.quantity}kg</p>
      <p className="mb-4">{product.description}</p>
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Add to Cart
      </button>
      {/* Optionally, you can add reviews and related products here */}
    </div>
  );
};

export default ProductDetails;