// CartPage.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartPage = () => {
  const { cartItems } = useContext(CartContext); // Access cartItems from the context

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartItems.map((item, index) => (
            <li key={index} className="flex flex-col border rounded-lg shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-48 h-48 " // Set a fixed height for images
              />
              <div className="p-4 flex-grow flex flex-col justify-between">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
