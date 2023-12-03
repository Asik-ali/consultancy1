// ApplyForm.js
import React, { useState } from "react";
import { storage as firebaseStorage } from "./firebaseConfig";
import "firebase/storage";

const ApplyForm = ({ onClose, selectedLocation }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const isValidForm = () => {
    // Implement your validation logic here
    return true; // Replace with actual validation
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidForm()) {
      // Handle validation errors
      return;
    }

    // Upload resume to Firebase Storage
    const resumeRef = firebaseStorage.ref().child(`resumes/${formData.resume.name}`);
    await resumeRef.put(formData.resume);
    const resumeUrl = await resumeRef.getDownloadURL();

    // Construct the WhatsApp message
    const message = `Name: ${encodeURIComponent(
      formData.name
    )}%0AEmail: ${encodeURIComponent(
      formData.email
    )}%0APhone: ${encodeURIComponent(
      formData.phone
    )}%0ALocation: ${encodeURIComponent(
      selectedLocation || "None"
    )}%0AResume: ${encodeURIComponent(resumeUrl)}`;

    // Construct the WhatsApp API link
    const whatsappLink = `https://api.whatsapp.com/send?phone=7639621594&text=${message}`;

    // Open WhatsApp link in the same tab
    window.location.href = whatsappLink;

    // Close the form
    onClose();
  };
  return (
    <div className="fixed z-[99] top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Apply Now</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-600"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="selectedLocation"
              className="block text-sm font-semibold text-gray-600"
            >
              Selected Location
            </label>
            <div className="bg-gray-100 p-2 rounded">
              {selectedLocation || "None"}
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="resume"
              className="block text-sm font-semibold text-gray-600"
            >
              Upload Resume (PDF)
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf"
              className="w-full p-2"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
