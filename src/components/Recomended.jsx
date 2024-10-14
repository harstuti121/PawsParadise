import React from 'react';
import Slider from 'react-slick';
import { CiStar } from "react-icons/ci"; // Ensure CiStar is imported
import i1 from '../assets/pd.jpg';
import i2 from '../assets/pd1.jpg';
import i3 from '../assets/pd3.jpg';
import i4 from '../assets/pd4.jpg';
import i5 from '../assets/pd5.jpg';

const Recomend = [
    { id: 1, title: "Beaphar Aloe Vera Shiny Dog Shampoo 250 ml", price: "Rs 350", rating: 5, image: i1 },
    { id: 2, title: "Royal Canin Mini Puppy Food for Dogs 4 kg", price: "Rs 1,500", rating: 4, image: i2 },
    { id: 3, title: "Pedigree Adult Dog Food for Nutrition 3 kg", price: "Rs 1,200", rating: 5, image: i3 },
    { id: 4, title: "Himalaya Pet Food for Adult Dogs 2 kg", price: "Rs 1,000", rating: 4, image: i4 },
    { id: 5, title: "Himalaya Erina Coat Cleanser for Dogs 200 ml", price: "Rs 275", rating: 4, image: i5 },
    { id: 6, title: "Drools Calcium Supplement for Dogs 50 pcs Pack", price: "Rs 450", rating: 5, image: i1 },
    { id: 7, title: "Virbac Omega 3 Skin Supplement for Dogs 200 ml", price: "Rs 600", rating: 4, image: i2 },
    { id: 8, title: "Petlife Neem and Aloe Dog Shampoo 500 ml", price: "Rs 450", rating: 3, image: i3 },
];

export default function Recomended() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Recommended Products</h2>
        <Slider {...settings}>
          {Recomend.map((product) => (
            <div key={product.id} className="p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
              <img
                src={product.image}
                alt={product.title}
                className="mb-8 rounded-lg w-48 h-40 object-cover"  // Uniform size for images
              />
              
              <div className="flex-grow flex flex-col justify-between">
                {/* Title container with fixed height and truncate for overflow handling */}
                <div className="text-center h-16 w-full">
                  <h3 className="text-xl font-bold mb-2 text-center h-full w-full overflow-hidden text-ellipsis line-clamp-2">
                    {product.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-2 text-lg font-medium">{product.price}</p>
                
                <div className="flex justify-center mb-4 space-x-1">
                  {[...Array(5)].map((_, index) => (
                    <CiStar
                      key={index}
                      className={index < product.rating ? 'text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
              </div>
  
  {/* Consistent button positioning at the bottom */}
  <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors mt-4">
    Add to Cart
  </button>
</div>



            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
