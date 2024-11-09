import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const AddProduct = ({ products, setProducts }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    quantity: '',
    price: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === formData.id ? formData : product
        )
      );
    } else {
      setProducts((prevProducts) => [
        ...prevProducts,
        { ...formData, id: Date.now().toString() },
      ]);
    }
    setFormData({ id: '', name: '', quantity: '', price: '', image: null });
  };

  const handleEdit = (product) => {
    setFormData(product);
  };

  const handleDelete = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-[#00b207]  mb-6 mt-8">Manage Products</h1>
      <div className="bg-white shadow-md rounded p-6 max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Product Name:</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded"
              placeholder="Enter product name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Quantity:</label>
            <input
              type="text"
              name="quantity"
              className="w-full p-2 border rounded"
              placeholder="Enter quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price:</label>
            <input
              type="text"
              name="price"
              className="w-full p-2 border rounded"
              placeholder="Enter price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Product Image:</label>
            <div className="flex items-center justify-center w-full">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="file-upload"
                onChange={handleImageChange}
              />
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-green-400 rounded-lg cursor-pointer hover:border-green-600"
              >
                <FaCloudUploadAlt className="text-3xl text-[#00b207] mb-2" />
                <span className="text-gray-600">Click or drag to upload an image</span>
                <span className="text-sm text-gray-500">(e.g., photo of your product)</span>
              </label>
            </div>
            {formData.image && (
              <img src={formData.image} alt="Product Preview" className="mt-2 h-32 w-full object-cover rounded" />
            )}
          </div>
          <button type="submit" className="bg-[#00b207]  text-white px-4 py-2 rounded hover:bg-green-700 w-full">
            {formData.id ? 'Edit Product' : 'Add Product'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;