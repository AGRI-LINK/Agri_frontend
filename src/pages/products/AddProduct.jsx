import React, { useState } from 'react';
import { apiAddproduct } from '../../services/products';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImages(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        try {
            setLoading(true);
            const response = await apiAddproduct(formData);
            if (response && response.status === 201) {
                navigate('/farmerdashboard');
            } else {
                console.error('Product not added', response);
            }
        } catch (error) {
            console.error('Error adding product:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white shadow-md rounded p-9 max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-center text-green-600 mb-6">Add Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Product Name:</label>
                    <input type="text" name="name" className="w-full p-2 border rounded" placeholder="Enter product name" required />
                </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description:</label>
            <textarea
              name="description"
              className="w-full p-2 border rounded"
              placeholder="Enter product description"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category:</label>
            <select name="category" className="w-full p-2 border rounded">
              <option value="">Select a Category</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Fruits">Fruits</option>
              <option value="Grains">Grains</option>
              <option value="Meat">Meat</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Quantity:</label>
            <input
              type="number"
              name="quantity"
              className="w-full p-2 border rounded"
              placeholder="Enter quantity"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price:</label>
            <input
              type="number"
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
            <div className="border-dashed border-2 border-green-500 p-4">
              {images && (
                <img src={images} alt="Product Preview" className="max-w-full max-h-60 mb-2" />
              )}
              <input type="file" name="images" accept="image/*" />
            </div>
          </div>
                <button type="submit" className={`bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 ${loading ? 'cursor-wait' : 'cursor-pointer'}`} disabled={loading}>
                    {loading ? 'Adding Product...' : 'Add Product'}
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
