import React, {  useEffect, useState } from 'react';
import AddProduct from '../products/AddProduct';
import EditProduct from '../products/EditProduct';
import { apiDeleteProductbyId, apiGetProducts, apiUpdateProductbyId } from '../../services/products';
import ProductList from './ProductList';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); 
    const [error, setError] = useState(null);

    // Fetch products when the component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await apiGetProducts();
                setProducts(response.data); 
            } catch (err) {
                setError('Error fetching products.');
                console.error(err);
            }
        };
        fetchProducts();
    }, []);

    // Add a new product
    const handleAddProduct = (newProduct) => {
        setProducts((prevProducts) => [...prevProducts, newProduct]);
    };

    // Update an existing product
    const handleUpdateProduct = async (updatedProduct) => {
        try {
            await apiUpdateProductbyId(updatedProduct);
            setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product.id === updatedProduct.id ? updatedProduct : product
                )
            );
            setSelectedProduct(null); 
        } catch (err) {
            setError('Error updating product.');
            console.error(err);
        }
    };

    // Delete a product
    const handleDeleteProduct = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await apiDeleteProductbyId(id);
                setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
            } catch (err) {
                setError('Error deleting product.');
                console.error(err);
            }
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-green-600">Manage Products</h1>
            {error && <p className="text-red-500">{error}</p>}

            {/* Add Product Section */}
            {/* <AddProduct setProducts={setProducts} handleAddProduct={handleAddProduct} /> */}

            {/* Product List Section */}
            <ProductList
                products={products}
                onEdit={(product) => setSelectedProduct(product)} 
                onDelete={handleDeleteProduct}
            />

            {/* Edit Product Section */}
            {selectedProduct && (
                <EditProduct
                    product={selectedProduct}
                    onUpdate={handleUpdateProduct}
                    onCancel={() => setSelectedProduct(null)} 
                />
            )}
        </div>
    );
};

export default ManageProducts;
