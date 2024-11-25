import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-6">About Agrivate</h1>
      <div className="bg-white shadow-md rounded p-6">
        <p className="text-lg mb-4">
          Welcome to Agrivate, your trusted platform for connecting farmers and buyers in the agricultural sector. Our mission is to bridge the gap between producers and consumers, ensuring that fresh, high-quality produce is accessible to everyone.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="mb-4">
          At Agrivate, we envision a world where farmers can easily reach a wider market, and buyers can source produce directly from the farm. We aim to empower farmers by providing them with the tools and resources they need to thrive in a competitive market.
        </p>
        <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Seamless connection between farmers and buyers.</li>
          <li>Comprehensive product listings with detailed information.</li>
          <li>Secure and efficient payment options.</li>
          <li>Real-time messaging for direct communication.</li>
          <li>Location-based services to find nearby produce.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">Join Us</h2>
        <p>
          Whether you're a farmer looking to expand your market reach or a buyer seeking fresh produce, Agrivate is here to support you. Join us today and be part of a growing community dedicated to sustainable agriculture and fair trade.
        </p>
      </div>
    </div>
  );
};

export default About;