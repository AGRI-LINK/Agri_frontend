// // import React from 'react';
// // import Slider from 'react-slick';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';

// // function ProductCard({ product }) {
// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1
// //   };

// //   return (
// //     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-5">
// //       <div className="mb-6 text-center">
// //         <h2 className="text-xl font-bold">{product.name}</h2>
// //       </div>
// //       <Slider {...settings}>
// //         {product.images && product.images.map((images, index) => (
// //           <div key={index}>
// //             <img src={`https://savefiles.org/${product.images}?shareable_link=530`} alt={product.name} className="w-full h-auto" />
// //           </div>
// //         ))}
// //       </Slider>
// //       <div className="mt-5">
// //         <p className="text-gray-600">{product.description}</p>
// //         <p><strong>Quantity:</strong> {product.quantity}</p>
// //         <p><strong>Category:</strong> {product.category}</p>
// //         <p><strong>Location:</strong> {product.location}</p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ProductCard;

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// function ProductCard({ product }) {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   // Ensure images is an array or provide a fallback array with a default image
//   const images = Array.isArray(product.images) ? product.images : ["/path/to/fallback-image.jpg"];

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-5 max-w-sm mx-auto">
//       <div className="mb-4 text-center">
//         <h2 className="text-xl font-bold text-green-600">{product.name}</h2>
//       </div>

//       {/* Image Carousel */}
//       <div className="mb-5">
//         <Slider {...settings}>
//           {images.map((images, index) => (
//             <div key={index}>
//               <img
//                 src={`https://savefiles.org/${product.images}?shareable_link=530`}
//                 alt={product.name}
//                 className="w-full h-48 object-cover"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Product Details */}
//       <div className="text-gray-700">
//         <p className="mb-2"><strong>Description:</strong> {product.description || "No description available."}</p>
//         <p className="mb-2"><strong>Quantity:</strong> {product.quantity || "Not specified"}</p>
//         <p className="mb-2"><strong>Category:</strong> {product.category || "Uncategorized"}</p>
//         <p className="mb-2"><strong>Location:</strong> {product.location || "Location not specified"}</p>
//         <p className="mt-4 font-semibold text-lg text-green-700">Price: ${product.price || "N/A"}</p>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaTh, FaList } from 'react-icons/fa';

function ProductCard({ products }) {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 6;

  // // Pagination logic
  // const totalPages = Math.ceil(products / itemsPerPage);
  // const paginatedProducts = products(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );

  // const changePage = (direction) => {
  //   if (direction === 'prev' && currentPage > 1) setCurrentPage(currentPage - 1);
  //   if (direction === 'next' && currentPage < totalPages) setCurrentPage(currentPage + 1);
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* View Toggle */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Available Products</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          >
            <FaTh size={20} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}
          >
            <FaList size={20} />
          </button>
        </div>
      </div>

      {/* Products */}
      <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6' : 'space-y-6'}`}>
        {products.map((product) => (
          <div
            key={product.id}
            className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ${viewMode === 'list' ? 'flex space-x-4' : ''}`}
          >
            {/* Product Images */}
            <div className={`${viewMode === 'list' ? 'w-1/3' : ''}`}>
              <Slider {...settings}>
                {/* Ensure images is an array, even if it's undefined */}
                {(Array.isArray(product.images) && product.images > 0) ? (
                  product.images.map((images, index) => (
                    <div key={index}>
                      <img
                        src={`https://savefiles.org/${images}?shareable_link=530`}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  ))
                ) : (
                  <img
                    src="/path/to/fallback-image.jpg"
                    alt="Default"
                    className="w-full h-48 object-cover"
                  />
                )}
              </Slider>
            </div>

            {/* Product Details */}
            <div className={`p-4 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
              <h3 className="text-lg font-bold text-green-600 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description || 'No description available.'}</p>
              <p className="text-gray-800">
                <strong>Category:</strong> {product.category || 'Uncategorized'}
              </p>
              <p className="text-gray-800">
                <strong>Location:</strong> {product.location || 'Not specified'}
              </p>
              <p className="text-lg font-semibold text-green-700 mt-3">
                Price: ${product.price || 'N/A'}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={() => changePage('prev')}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => changePage('next')}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
