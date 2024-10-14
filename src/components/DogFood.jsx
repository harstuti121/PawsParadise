import React from 'react';
import { CiStar } from "react-icons/ci"; // Ensure CiStar is imported
import i1 from '../assets/pd.jpg';
import i2 from '../assets/pd1.jpg';
import i3 from '../assets/pd3.jpg';
import i4 from '../assets/pd4.jpg';
import i5 from '../assets/pd5.jpg';

const DogFoodData = [
  { id: 1, title: "Beaphar Green Tea Extract & Aloe Vera Shiny White Coat Dog Shampoo 250 ml", price: "Rs 350", rating: 5, image: i1 },
  { id: 2, title: "Royal Canin Mini Puppy Dog Food 4 kg", price: "Rs 1,500", rating: 4, image: i1},
  { id: 3, title: "Pedigree Adult Dry Dog Food 3 kg", price: "Rs 1,200", rating: 5, image: i4 },
  { id: 4, title: "Himalaya Healthy Pet Food for Adult Dogs 2 kg", price: "Rs 1,000", rating: 4, image: i4 },
  { id: 5, title: "Himalaya Erina Coat Cleanser for Dogs 200 ml", price: "Rs 275", rating: 4, image: i4},
  { id: 6, title: "Drools Absolute Calcium Tablet for Dogs 50 pcs", price: "Rs 450", rating: 5, image: i4 },
  { id: 7, title: "Virbac Omegaderm Skin Supplement for Dogs 200 ml", price: "Rs 600", rating: 4, image: i4 },
  { id: 8, title: "Petlife Dog Shampoo with Neem and Aloe 500 ml", price: "Rs 450", rating: 3, image: i1 },
  { id: 6, title: "Drools Absolute Calcium Tablet for Dogs 50 pcs", price: "Rs 450", rating: 5, image: i4 },
  { id: 7, title: "Virbac Omegaderm Skin Supplement for Dogs 200 ml", price: "Rs 600", rating: 4, image: i1 },
  { id: 8, title: "Petlife Dog Shampoo with Neem and Aloe 500 ml", price: "Rs 450", rating: 3, image: i1 },
  { id: 8, title: "Petlife Dog Shampoo with Neem and Aloe 500 ml", price: "Rs 450", rating: 3, image: i1 },
];

export default function DogFood() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto">
        {/* <h2 className="text-4xl font-bold mb-8 text-center">Recommended Products</h2> */}
        <div className="flex justify-center flex-wrap">  {/* Use flexbox for row display */}
          {DogFoodData.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 m-3" style={{ flex: '0 0 calc(80% / 4)', maxWidth: 'calc(80% / 4)' }}> {/* 6 items per row, no margin */}
              <img src={product.image} alt={product.title} className="mb-2 rounded-lg w-full h-48 object-cover" />
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-2">{product.price}</p>

              <div className="flex justify-start mb-2">
                {[...Array(5)].map((_, index) => (
                  <CiStar
                    key={index}
                    className={index < product.rating ? 'text-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>

              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

