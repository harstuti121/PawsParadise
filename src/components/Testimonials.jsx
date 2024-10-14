// src/components/Testimonials.jsx
import React from 'react';

const testimonials = [
  { id: 1, name: "John Doe", comment: "Great service!", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Jane Smith", comment: "My dog loved it!", image: "https://via.placeholder.com/100" },
  { id: 3, name: "Alice Johnson", comment: "Will definitely come back!", image: "https://via.placeholder.com/100" },
  { id: 4, name: "Michael Brown", comment: "Highly recommend!", image: "https://via.placeholder.com/100" },
  { id: 5, name: "Sarah Lee", comment: "Excellent care!", image: "https://via.placeholder.com/100" }
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>

        {/* Bootstrap Carousel */}
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <div className="text-center p-6 bg-white shadow-lg rounded-lg">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="rounded-full mx-auto mb-4"
                  />
                  <p className="text-gray-700 italic mb-4">"{testimonial.comment}"</p>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
