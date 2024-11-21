// import React, { useState } from 'react';
// import { apiAddproduct } from '../../services/products';
// import { useNavigate } from 'react-router-dom';
// import ProductCard from './ProductCard'; 

// const AddProduct = ({ products, setProducts }) => {
//   const navigate = useNavigate();
//   const [images, setImages] = useState();
//   const [loading, setLoading] = useState(false);
//   const [newProduct, setNewProduct] = useState(null); 

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const payload = {
//       name: formData.get('name'),
//       description: formData.get('description'),
//       quantity: formData.get('quantity'),
//       price: formData.get('price'),
//       category: formData.get('category'),
//       location: formData.get('location'),
//       images: formData.get('images'),

//     };

//     try {
//       setLoading(true);

//       const response = await apiAddproduct(payload);
//       console.log(response);

//       if (response && response.status === 201) {
//         setNewProduct(response.data); // Store the new product data in state
//         navigate("/products");
//       } else {
//         console.error('Product not added', response);
//       }
//     } catch (error) {
//       console.error('Error adding product:', error);
//     } finally {
//       setLoading(false);
//     }
//   };


//   return (
//     <div className="bg-white shadow-md rounded p-9 max-w-md mx-auto">
//       <h1 className="text-3xl font-bold text-center text-[#00b207]  mb-6 mt-8">Manage Products</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700">Product Name:</label>
//           <input
//             type="text"
//             name="name"
//             className="w-full p-2 border rounded"
//             placeholder="Enter product name"
//           />
//         </div>
//         <div>
//           <label htmlFor="description">Description</label>
//           <textarea
//             type="text"
//             name="description"
//             className="w-full p-2 border rounded"
//             placeholder="Description"
//             rows={1}
//           />
//         </div>
//         <div>
//           <label htmlFor="category">Category</label>
//           <select
//             type="text"
//             name="category"
//             className="w-full p-2 border rounded"
//           >
//             <option className="text-gray-700">Select a Category</option>
//             <option name="Vegetables">Vegetables</option>
//             <option name="Fruits">Fruits</option>
//             <option name="Grains">Grains</option>
//             <option name="Meat">Meat</option>
//             <option name="Others">Others</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Quantity:</label>
//           <input
//             type="text"
//             name="quantity"
//             className="w-full p-2 border rounded"
//             placeholder="Enter quantity"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Price:</label>
//           <input
//             type="text"
//             name="price"
//             className="w-full p-2 border rounded"
//             placeholder="Enter price"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Location:</label>
//           <input
//             type="text"
//             name="location"
//             className="w-full p-2 border rounded"
//             placeholder="Enter location"
//           />
//         </div>
//         {/* <div className="mb-4">
//           <label className="block text-gray-700">Product Image:</label>
//           <div className="flex items-center justify-center w-full">
//             <input
//               type="file"
//               name="images"
//               accept="images"
//               // className="hidden"
//               id="file-upload"
//               multiple
              
//             />
//             <label
//               htmlFor="file-upload"
//               className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-green-400 rounded-lg cursor-pointer hover:border-green-600"
//             >
//               <FaCloudUploadAlt className="text-3xl text-[#00b207] mb-2" />
//               <span className="text-gray-600">Click or drag to upload an image</span>
//               <span className="text-sm text-gray-500">(e.g., photo of your product)</span>
//             </label>
//           </div>
//         </div> */}

//         <div className="mb-4">
//           <label className="block text-gray-700">Product Image:</label>
//           <div className="border-dashed border-2 border-green-500 mb-4 p-4">
//             {images && (
//               <img src={images} alt="Product" className="max-w-full max-h-60 mb-2" />
//             )}
//             <input
//               type="file"
//             />
//           </div>

//           <button
//             type="submit"
//             className={`bg-[#00b207] text-white px-4 py-2 rounded hover:bg-green-700 ${loading ? "cursor-wait" : "cursor-pointer"}`}
//             disabled={loading}
//           >
//             {loading ? "Adding Product..." : "Add Product"}
//           </button>
//         </div>
//       </form>
//       {newProduct && (
//         <ProductCard product={newProduct} />
//       )}
//     </div>
//   );
// };



// export default AddProduct;


import React, { useState } from 'react';
import { apiAddproduct } from '../../services/products';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';

const AddProduct = ({ products, setProducts }) => {
  const navigate = useNavigate();
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newProduct, setNewProduct] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImages(URL.createObjectURL(file)); // Preview image
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      setLoading(true);
      const response = await apiAddproduct(formData);
      if (response && response.status === 201) {
        const addedProduct = response.data;
        setProducts((prev) => [...prev, addedProduct]);
        navigate('/products');
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
      <h1 className="text-3xl font-bold text-center text-[#00b207] mb-6">Add Product</h1>
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
            <input type="file" name="images" accept="image/*" onChange={handleFileChange} />
          </div>
        </div>
        <button
          type="submit"
          className={`bg-[#00b207] text-white px-4 py-2 rounded hover:bg-green-700 ${loading ? 'cursor-wait' : 'cursor-pointer'}`}
          disabled={loading}
        >
          {loading ? 'Adding Product...' : 'Add Product'}
        </button>
      </form>
      {newProduct && <ProductCard product={newProduct} />}
    </div>
  );
};

export default AddProduct;
