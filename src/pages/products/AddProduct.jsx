import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { apiClient } from '../../services/config';
import { toast } from 'react-toastify';

const AddProduct = ({ products, setProducts }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages(files);
  };

  const handleUpload = () => {
    // Implement the logic to upload the selected images to the server
    // You can use FormData to append the image files and send them to the server
    const formData = new FormData();
    selectedImages.forEach((image, index) => {
      formData.append(`image${index + 1}`, image);
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target)
      const response = await apiClient.post('/api/products/add', formData);
      if (response.status === 200) {
        const newProduct = response.data;
        setProducts((prevProducts) => [
          ...prevProducts,
          newProduct,
        ]);
        setFormData({
          name: "", description: "", quantity: "", price: "", images: [],
          category: "", location: "",
        });
      } else {
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
      <div className="bg-white shadow-md rounded p-9 max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#00b207]  mb-6 mt-8">Manage Products</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Product Name:</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded"
              placeholder="Enter product name"
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              name="description"
              className="w-full p-2 border rounded"
              placeholder="Description"
              rows={3}
            />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <select
            type="text"
            name="category"
            className="w-full p-2 border rounded"
            >
            <option className="text-gray-700">Select a Category</option>
              <option name="Vegetables">Vegetables</option>  
              <option name="Fruits">Fruits</option>  
              <option name="Grains">Grains</option>  
              <option name="Meat">Meat</option>  
              <option name="Others">Others</option>  
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Quantity:</label>
            <input
              type="text"
              name="quantity"
              className="w-full p-2 border rounded"
              placeholder="Enter quantity"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price:</label>
            <input
              type="text"
              name="price"
              className="w-full p-2 border rounded"
              placeholder="Enter price"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location:</label>
            <input
              type="text"
              name="location"
              className="w-full p-2 border rounded"
              placeholder="Enter location"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Product Image:</label>
            <div className="flex items-center justify-center w-full">
              <input
                type="file"
                name="images"
                accept="image/*"
                className="hidden"
                id="file-upload"
                multiple
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
          </div>
          <button type="submit" className="bg-[#00b207]  text-white px-4 py-2 rounded hover:bg-green-700 w-full">
            Add Product
          </button>
        </form>
      </div>
  );
};

export default AddProduct;