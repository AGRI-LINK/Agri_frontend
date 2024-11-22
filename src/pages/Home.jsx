import React from 'react';
import land from "../assets/images/land.jpg";
import Navbar from '../components/Navbar';

const Home = () => {
    const slogan = "BRIDGING FARMERS AND BUYERS FOR SEAMLESS PRODUCE TRADING!";

    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${land})` }}>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
                <h1 className="text-4xl font-bold text-white mb-6">Welcome to Agrivate</h1>
                <p className="text-center text-lg font-bold text-white mb-6">{slogan}</p>
                <div className="text-center mt-6">
                    <a href="/products" className="bg-[#00b207] text-white px-4 py-2 rounded hover:bg-green-700">
                        View Listings
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;