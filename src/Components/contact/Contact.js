// ServicePage.js
import React, { useState } from 'react';
import ApplyForm from './ApplyForm';

const locations = ['Chennai', 'Bangalore', 'Mumbai', 'Telangana'];

const ServicePage = () => {
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleApplyClick = () => {
    setShowApplyForm(true);
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">HR Consulting Services</h1>
      
      <h2 className="text-xl font-semibold mb-2">Locations:</h2>
      <ul className="flex flex-wrap mb-4">
        {locations.map((location, index) => (
          <li
            key={index}
            onClick={() => handleLocationClick(location)}
            className={`cursor-pointer px-4 py-2 m-2 border border-gray-300 rounded ${
              selectedLocation === location ? 'bg-blue-500 text-white' : ''
            }`}
          >
            {location}
          </li>
        ))}
      </ul>

      <button
        onClick={handleApplyClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Apply Heres
      </button>

      {showApplyForm && (
        <ApplyForm
          onClose={() => setShowApplyForm(false)}
          selectedLocation={selectedLocation}
        />
      )}
    </div>
  );
};

export default ServicePage;
