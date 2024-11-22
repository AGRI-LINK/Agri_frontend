import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { apiGetProducts } from '../../services/products';

function ProductListing() {
  const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters and Sort States
  // const [searchKeyword, setSearchKeyword] = useState('');
  // const [selectedCategory, setSelectedCategory] = useState('');
  // const [priceRange, setPriceRange] = useState('');
  // const [location, setLocation] = useState('');
  // const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await apiGetProducts();
        setProducts(response.data);
        // setFilteredProducts(response.data); // Initialize filtered products
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filtering Logic
  // useEffect(() => {
  //   let filtered = products;

  //   if (searchKeyword) {
  //     filtered = filtered.filter((product) =>
  //       product.name.toLowerCase().includes(searchKeyword.toLowerCase())
  //     );
  //   }

  //   if (selectedCategory) {
  //     filtered = filtered.filter((product) => product.category === selectedCategory);
  //   }

  //   if (priceRange) {
  //     const [min, max] = priceRange.split('-').map(Number);
  //     filtered = filtered.filter((product) => product.price >= min && product.price <= max);
  //   }

  //   if (location) {
  //     filtered = filtered.filter((product) => product.location.toLowerCase().includes(location.toLowerCase()));
  //   }

  //   if (sortOrder) {
  //     filtered.sort((a, b) => {
  //       if (sortOrder === 'lowest') return a.price - b.price;
  //       if (sortOrder === 'highest') return b.price - a.price;
  //       return 0;
  //     });
  //   }

  //   setFilteredProducts(filtered);
  // }, [searchKeyword, selectedCategory, priceRange, location, sortOrder, products]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Products</h2>

      {/* Filters
      <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search by keyword"
          className="w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-2 mb-4 sm:mb-0"
        />

        <select
          
          className="w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-2 mb-4 sm:mb-0"
        >
          <option value="">Filter by Category</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Grains">Grains</option>
        </select>

        <select
          
          className="w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-2 mb-4 sm:mb-0"
        >
          <option value="">Filter by Price</option>
          <option value="0-50">0 - 50</option>
          <option value="51-100">51 - 100</option>
          <option value="101-200">101 - 200</option>
        </select>

        <input
          type="text"
          placeholder="Search by location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full sm:w-auto border border-gray-300 rounded-lg px-4 py-2 mb-4 sm:mb-0"
        />
      </div> */}

      {/* Product Grid */}
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      
        <div className="text-center text-gray-600">No products found</div>
    
    </div>
  );
}

export default ProductListing;
