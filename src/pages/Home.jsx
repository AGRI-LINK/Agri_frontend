import React from 'react';


const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-[#00b207] mb-6">Welcome to AgriLink</h1>
      <p className="text-center text-lg mb-6">
        AgriLink connects farmers and buyers for seamless produce trading. Create profiles, list your produce, and connect directly with potential buyers.
      </p>
      <div className="flex justify-center space-x-4">
        <img src="https://via.placeholder.com/150" alt="Farm" className="rounded shadow-md" />
        <img src="https://via.placeholder.com/150" alt="Produce" className="rounded shadow-md" />
        <img src="https://via.placeholder.com/150" alt="Marketplace" className="rounded shadow-md" />
      </div>
      <div className="text-center mt-6">
        <a href="/listings" className="bg-[#00b207] text-white px-4 py-2 rounded hover:bg-green-700">
          View Listings
        </a>
      </div>
    </div>
  );
};

export default Home;