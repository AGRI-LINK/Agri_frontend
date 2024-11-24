import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Product List</h2>
            {products.length > 0 ? (
                <table className="table-auto w-full border">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Price</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td className="px-4 py-2 border">{product.name}</td>
                                <td className="px-4 py-2 border">${product.price}</td>
                                <td className="px-4 py-2 border">
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                                        onClick={() => onEdit(product)} // Pass product to edit
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                        onClick={() => onDelete(product.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
};

export default ProductList;
