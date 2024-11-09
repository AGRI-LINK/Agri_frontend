import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#00b207]  text-white p-4 text-center w-full">
      <p>&copy; 2024 AgriLink. All rights reserved.</p>
      <div className="mt-2">
        <a href="/about" className="hover:underline">About Us</a> | 
        <a href="/contact" className="hover:underline">Contact</a> | 
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;