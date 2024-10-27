import React, { useState } from 'react';
import './Book.css';

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    species: '',
    breed: '',
    age: '',
    sex: '',
    weight: '',
    petParent: '',
    client: '',
    phoneNo: '',
    alternatePhoneNo: '',
    email: '',
    dateSlot: '',
    timeSlot: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Sending form data to backend
    fetch('http://localhost:5000/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          console.log(data.message);
          alert("You will get the response shortly");
  
          // Reset form data after submission
          setFormData({
            name: '',
            species: '',
            breed: '',
            age: '',
            sex: '',
            weight: '',
            petParent: '',
            client: '',
            phoneNo: '',
            alternatePhoneNo: '',
            email: '',
            dateSlot: '',
            timeSlot: '',
            terms: false,
          });
      }})
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  
  return (
    <div className="bookContainer">
      <form
        className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Book an Appointment</h2>
        <fieldset className="space-y-4">
          {/* Pet Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold mb-1">
              Name of your pet <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter pet name"
            />
          </div>

          {/* Species */}
          <div className="flex flex-col">
            <label htmlFor="species" className="text-sm font-semibold mb-1">
              Species <span className="text-red-500">*</span>
            </label>
            <select
              name="species"
              id="allotement-species-select"
              value={formData.species}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Please select allotement species</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Exotic Pets">Exotic Pets</option>
            </select>
          </div>

          {/* Breed */}
          <div className="flex flex-col">
            <label htmlFor="breed" className="text-sm font-semibold mb-1">
              Breed <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="breed"
              id="breed"
              value={formData.breed}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter breed"
            />
          </div>

          {/* Age */}
          <div className="flex flex-col">
            <label htmlFor="age" className="text-sm font-semibold mb-1">
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="age"
              id="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter age"
            />
          </div>

          {/* Sex */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold mb-1">Sex <span className="text-red-500">*</span></span>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="sex"
                  value="Male"
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="sex"
                  value="Female"
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                Female
              </label>
            </div>
          </div>

          {/* Weight */}
          <div className="flex flex-col">
            <label htmlFor="weight" className="text-sm font-semibold mb-1">
              Weight (approximate) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="weight"
              id="weight"
              value={formData.weight}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter weight in Kgs"
            />
          </div>

          {/* Pet Parent Name */}
          <div className="flex flex-col">
            <label htmlFor="petParent" className="text-sm font-semibold mb-1">
              Name of pet parent <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="petParent"
              id="pet_parent"
              value={formData.petParent}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter pet parent name"
            />
          </div>

          {/* Client Type */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold mb-1">New/ Existing client <span className="text-red-500">*</span></span>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="client"
                  value="New"
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                New
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="client"
                  value="Existing"
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                Existing
              </label>
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label htmlFor="phoneNo" className="text-sm font-semibold mb-1">
              Phone no <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phoneNo"
              id="phone_no"
              value={formData.phoneNo}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter phone number"
              pattern="[0-9]{10}"
            />
            <span className="text-sm mt-2">Alternate no</span>
            <input
              type="tel"
              name="alternatePhoneNo"
              id="alternatephone_no"
              value={formData.alternatePhoneNo}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-1"
              placeholder="Enter alternate phone number"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold mb-1">
              Registered email id <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter registered email"
            />
          </div>

          {/* Date and Time Slots */}
          <div className="flex flex-col">
            <label htmlFor="dateSlot" className="text-sm font-semibold mb-1">
              Date Slot <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="dateSlot"
              id="date_slot"
              value={formData.dateSlot}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label htmlFor="timeSlot" className="text-sm font-semibold mt-2 mb-1">
              Time Slot <span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              name="timeSlot"
              id="time_slot"
              value={formData.timeSlot}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              checked={formData.terms}
              onChange={handleChange}
              required
              className="mr-2"
            />
            <label htmlFor="terms" className="text-sm">
              I accept the terms and conditions
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Book Appointment
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Book;
