import React, { useState } from 'react';

const ReviewAndRating = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle review submission
    console.log(`Rating: ${rating}, Review: ${review}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-6">Review and Rating</h1>
      <div className="bg-white shadow-md rounded p-4 max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Rating:</label>
            <select
              className="w-full p-2 border rounded"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="0">Select a rating</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Review:</label>
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Write your review here..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="bg-green-600  text-white px-4 py-2 rounded hover:bg-green-700 w-full">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewAndRating; 