// import React from 'react';
// import land from "../assets/images/land.jpg";


// const Home = () => {
//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center text-[#00b207] mb-6">Welcome to Agrivate</h1>
//       <p className="text-center text-lg mb-6">
//         BRIDGING FARMERS AND BUYERS FOR SEAMLESS PRODUCE TRADING!”
//       </p>
//       <div className="flex justify-center space-x-4">
//         <img src={land} alt="Farm" className="rounded shadow-md" />
//       </div>
//       <div className="text-center mt-6">
//         <a href="/listings" className="bg-[#00b207] text-white px-4 py-2 rounded hover:bg-green-700">
//           View Listings
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useState } from 'react';
import { FaSearch, FaLeaf, FaTruck, FaUsers } from 'react-icons/fa';
// import ProductCard from './products/ProductCard';
import RootLayout from '../layouts/RootLayout';
import ProductDetails from './products/ProductDetails';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allProducts = [
    { id: 1, name: 'Fresh Apples', price: 2.99, image: 'https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg', rating: 4.5, reviews: 120, category: 'Fruits' },
    { id: 2, name: 'Organic Tomatoes', price: 3.49, image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg', rating: 4.2, reviews: 85, category: 'Vegetables' },
    { id: 3, name: 'Farm Eggs', price: 4.99, image: 'https://images.pexels.com/photos/1625385/pexels-photo-1625385.jpeg', rating: 4.8, reviews: 200, category: 'Dairy' },
    { id: 4, name: 'Fresh Carrots', price: 1.99, image: 'https://images.pexels.com/photos/3650647/pexels-photo-3650647.jpeg', rating: 4.3, reviews: 95, category: 'Vegetables' },
    { id: 5, name: 'Organic Milk', price: 3.99, image: 'https://images.pexels.com/photos/11122219/pexels-photo-11122219.jpeg', rating: 4.6, reviews: 150, category: 'Dairy' },
    { id: 6, name: 'Ripe Bananas', price: 2.49, image: 'https://images.pexels.com/photos/47305/bananas-banana-shrub-fruits-yellow-47305.jpeg', rating: 4.4, reviews: 110, category: 'Fruits' },
  ];

  const categories = ['All', 'Fruits', 'Vegetables', 'Dairy'];

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || product.category === selectedCategory)
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
      <div>
        {/* Hero Section */}
        <section className="bg-green-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Agrivate</h1>
            <p className="text-xl mb-8">"Bridging Farmers and Buyers for seamless produce trading!”</p>
            <div className="max-w-md mx-auto">
              <div className="flex items-center bg-white rounded-full overflow-hidden px-2">
                <input
                  className="w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
                  id="search"
                  type="text"
                  placeholder="Search for products..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <button className="bg-green-500 text-white rounded-full p-2">
                  <FaSearch className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8">
          <div className="container mx-auto">
            <div className="flex justify-center space-x-4">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full ${selectedCategory === category
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-green-100'
                    }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Agrivate?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <FaLeaf className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fresh & Organic</h3>
                <p className="text-gray-600">Direct from local farms to your table</p>
              </div>
              <div className="text-center">
                <FaTruck className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Get your products delivered quickly</p>
              </div>
              <div className="text-center">
                <FaUsers className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Support Local Farmers</h3>
                <p className="text-gray-600">Empower your local farming community</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              {searchTerm || selectedCategory !== 'All' ? 'Search Results' : 'Featured Products'}
            </h2>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductDetails key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600">No products found. Try a different search or category.</p>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-green-500 text-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl mb-8">Join Agrivate today and experience the freshness!</p>
            <button className="bg-white text-green-500 font-bold py-2 px-6 rounded-full text-lg hover:bg-gray-100 transition duration-300">
              Sign Up Now
            </button>
          </div>
        </section>
      </div>
  );
};

export default Home;