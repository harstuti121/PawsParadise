import React from 'react';

const Items = () => {
  const categories = [
    { image: 'cat-litter-box.jpg', title: 'Cat Litter Box', price: '₹880.00' },
    { image: 'automatic-pet-feeding.jpg', title: 'Automatic Pet Feeding', price: '₹2000.00' },
    { image: 'cat-nail-machine.jpg', title: 'Cat Nail Machine', price: '₹899.00' },
    { image: 'cat-drying-cage.jpg', title: 'Cat Drying Cage', price: '₹5480.00' },
    { image: 'cat-litter-box.jpg', title: 'Cat Litter Box', price: '₹880.00' },
    { image: 'automatic-pet-feeding.jpg', title: 'Automatic Pet Feeding', price: '₹2000.00' },
    { image: 'cat-nail-machine.jpg', title: 'Cat Nail Machine', price: '₹899.00' },
    { image: 'cat-drying-cage.jpg', title: 'Cat Drying Cage', price: '₹5480.00' },
];

  const products = [
    { image: 'organic-feed.jpg', title: 'Best Organic Feeds', price: '₹102.00' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Browse By Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg text-center shadow-lg">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-lg mb-2 text-gray-700">{item.price}</p>
          </div>
        ))}
      </div>
      <h1 className="text-2xl font-bold mb-4 mt-8">Best Organic Feeds</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg text-center shadow-lg">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-lg mb-2 text-gray-700">{item.price}</p>
            <button className="bg-green-500 text-white py-2 px-4 rounded">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
