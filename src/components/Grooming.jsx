import React from 'react';
import g1 from '../assets/g1.jpeg';
import g2 from '../assets/g2.jpeg';
import g3 from '../assets/g3.jpeg';
import g4 from '../assets/g4.jpeg';
import g5 from '../assets/g5.jpeg';
import g6 from '../assets/g6.jpeg';
import g7 from '../assets/g7.jpeg';
import g8 from '../assets/g8.jpeg';
import g9 from '../assets/g9.jpeg';

// Define the grooming services array with images and descriptions
const groomingServices = [
  {
    title: "Bath",
    description: "Regular bathing helps remove dirt, debris, and the 'doggy smell'.",
    image: g1, // Replace with actual image path
  },
  {
    title: "Nail Trimming",
    description: "Keeps nails short to ensure healthy feet and prevent painful walking.",
    image: g2,// Replace with actual image path
  },
  {
    title: "Ear Cleaning",
    description: "Regular cleaning prevents ear infections and maintains ear health.",
    image: g3, // Replace with actual image path
  },
  {
    title: "Perfume",
    description: "Leave your pet smelling fresh and clean.",
    image: g4, // Replace with actual image path
  },
  {
    title: "Comb Out",
    description: "Removes tangles and dead hair, promoting a healthy coat.",
    image: g5, // Replace with actual image path
  },
  {
    title: "Medicated Bath",
    description: "Special baths for skin conditions and overall health.",
    image: g6, // Replace with actual image path
  },
  {
    title: "Sanitary Trim",
    description: "Keeps your pet clean and comfortable in sensitive areas.",
    image: g7, // Replace with actual image path
  },
  {
    title: "Eye and Face Trim",
    description: "Keeps your pet's face looking neat and tidy.",
    image: g8, // Replace with actual image path
  },
  {
    title: "Lion Cut",
    description: "Stylish grooming cut for cats including bath and trim.",
    image: g9, // Replace with actual image path
  },
];

const Grooming = () => {
  return (
    <div className="max-w-6xl mx-auto p-3 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Grooming Services</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {groomingServices.map((service, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={service.image} alt={service.title} className="mb-4 mx-auto rounded-full w-50 h-50 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
              {/* Book Now Button */}
              <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-500">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grooming;


