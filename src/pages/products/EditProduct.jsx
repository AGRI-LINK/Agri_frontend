import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apiClient } from '../../services/config';

const EditProduct = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const navigate = useNavigate();
    const [product, setProduct] = useState({ name: '', price: '', description: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProduct = async (id) => {
            try {
                const response = await apiClient.get(`/api/products/${id}`);
                setProduct(response.data);
            } catch (err) {
                setError("Error fetching product data");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await apiClient.patch(`/api/products/update/${id}`, product);
            navigate(`/products/${id}`); // Redirect to the product detail page after successful update
        } catch (error) {
            setError("Error updating product");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                await apiClient.delete(`/api/products/delete/${id}`);
                navigate('/products'); // Redirect to the products list after deletion
            } catch (err) {
                setError("Error deleting product");
            }
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Product Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description:</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                    Update Product
                </button>
                <button type="button" onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
                    Delete Product
                </button>
            </form>
        </div>
    );
};

export default EditProduct; 