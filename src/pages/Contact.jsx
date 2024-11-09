import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Contact form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-[#00b207] mb-6">Contact Us</h1>
      <div className="bg-white shadow-md rounded p-6 max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message:</label>
            <textarea
              name="message"
              className="w-full p-2 border rounded"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="bg-[#00b207] text-white px-4 py-2 rounded hover:bg-green-700 w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact; 