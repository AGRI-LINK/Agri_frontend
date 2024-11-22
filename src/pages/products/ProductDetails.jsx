import React from 'react'

const ProductDetails = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <img src={image} alt={name} className="w-full h-64 object-cover mb-4" />
      <p className="text-lg font-semibold mb-2">Price: ${price}</p>
      <p className="mb-4">{description}</p>
      <button className="bg-[#00b207] text-white px-4 py-2 rounded hover:bg-green-700">
        Add to Cart
      </button>
      {/* Optionally, you can add reviews and related products here */}
    </div>
  );
};

export default ProductDetails;