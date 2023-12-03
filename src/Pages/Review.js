// src/App.js
import React, { useState } from 'react';

const ReviewSection = () => {
  const [rating, setRating] = useState(3);

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  return (
    <div className="max-w-lg mx-auto lg:ms-12 my-8">
      <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>
      <form>
        <div className="flex items-center mb-4">
          <label className="mr-4">Rating:</label>
          {[1, 2, 3, 4, 5].map((value) => (
            <label key={value} className="inline-flex items-center mr-2">
              <input
                type="radio"
                value={value}
                checked={rating === value}
                onChange={handleRatingChange}
                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2">{value}</span>
            </label>
          ))}
        </div>
        <div className="mb-4">
          <label htmlFor="review" className="block text-sm font-medium text-gray-700">
            Review:
          </label>
          <textarea
            id="review"
            name="review"
            rows="4"
            className="mt-1 p-2 block w-full border rounded-md bg-gray-100 focus:outline-none focus:border-indigo-500 transition duration-150 ease-in-out"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};


export default ReviewSection
