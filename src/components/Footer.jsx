// import React from 'react';
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-[#00b207] text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-between">
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h3 className="text-xl font-bold mb-4">Agrivate</h3>
//             <p className="text-sm">Connecting farmers and buyers for a sustainable future.</p>
//           </div>
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="text-sm">
//               <li className="mb-2"><a href="/" className="hover:text-green-200">Home</a></li>
//               <li className="mb-2"><a href="/products" className="hover:text-green-200">Products</a></li>
//               <li className="mb-2"><a href="/about" className="hover:text-green-200">About Us</a></li>
//               <li className="mb-2"><a href="/contact" className="hover:text-green-200">Contact</a></li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/4 mb-6 md:mb-0">
//             <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
//             <p className="text-sm mb-2">123 Farm Road, Accra, Ghana</p>
//             <p className="text-sm mb-2">Phone: +233 123 456 789</p>
//             <p className="text-sm">Email: info@agrivate.com</p>
//           </div>
//           <div className="w-full md:w-1/4">
//             <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
//             <div className="flex space-x-4">
//               <a href="#" className="text-white hover:text-green-200"><FaFacebook size={24} /></a>
//               <a href="#" className="text-white hover:text-green-200"><FaTwitter size={24} /></a>
//               <a href="#" className="text-white hover:text-green-200"><FaInstagram size={24} /></a>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-green-500 mt-8 pt-6 text-sm text-center">
//           <p>&copy; 2024 HarvestHub. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#00b207] text-white py-8 relative bottom-0 left-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Agrivate</h3>
            <p className="text-sm">"Bridging Farmers and Buyers for seamless produce trading!"</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm">
              <li className="mb-2"><a href="/" className="hover:text-green-200">Home</a></li>
              <li className="mb-2"><a href="/products" className="hover:text-green-200">Products</a></li>
              <li className="mb-2"><a href="/about" className="hover:text-green-200">About Us</a></li>
              <li className="mb-2"><a href="/contact" className="hover:text-green-200">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm mb-2">123 Farm Road, Accra, Ghana</p>
            <p className="text-sm mb-2">Phone: +233 123 456 789</p>
            <p className="text-sm">Email: info@agrivate.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-200"><FaFacebook size={24} /></a>
              <a href="#" className="text-white hover:text-green-200"><FaTwitter size={24} /></a>
              <a href="#" className="text-white hover:text-green-200"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-green-500 mt-8 pt-6 text-sm text-center">
          <p>&copy; 2024 Agrivate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
