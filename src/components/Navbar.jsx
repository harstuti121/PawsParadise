import React, { useContext, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { CartContext } from './CartContext'; // Ensure this is the correct path to your CartContext

export default function Navbar() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext); // Access cartItems from the context
  const [showCart, setShowCart] = useState(false); // State to control cart item visibility
  const cartRef = useRef(null); // Reference for the cart dropdown

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle cart visibility
  const handleCartToggle = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 shadow-lg py-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="text-2xl font-bold text-yellow-500 cursor-pointer"
          onClick={() => navigate('/')}
        >
          PawsParadise
        </div>
        <ul className="flex space-x-8 text-white">
          <li className="cursor-pointer" onClick={() => navigate('/')}>Home</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer" onClick={() => navigate('/shop')}>Shop</li>
          <li className="cursor-pointer" onClick={() => navigate('/book')}>Book</li>
          <li className="cursor-pointer" onClick={() => navigate('/grooming')}>Grooming</li>
        </ul>

        <div className="flex items-center space-x-4 relative">
          
          <button className="bg-yellow-500 p-2 rounded focus:outline-none relative" onClick={handleCartToggle}>
            <BsCart3 />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
          
          {/* Cart item dropdown */}
          {showCart && cartItems.length > 0 && (
            <div ref={cartRef} className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-50">
              <h3 className="font-bold text-lg mb-2">Cart Items</h3>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index} className="flex justify-between items-center mb-2">
                    <span className="text-sm">{item.title}</span>
                    <span className="text-sm">{item.price}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="mt-2 w-full bg-green-500 text-white py-1 rounded hover:bg-green-600"
                onClick={() => navigate('/cart')}
              >
                View Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
