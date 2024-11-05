// import React, { useState, useContext, useEffect } from 'react';
// import { FiMinusCircle } from 'react-icons/fi';
// import { IoAddCircleOutline } from 'react-icons/io5';
// import { CartContext } from './CartContext';
// import './CartPage.css';

// const CartPage = () => {
//   const { cartItems: initialCartItems } = useContext(CartContext);
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const uniqueItems = initialCartItems.reduce((acc, item) => {
//       // Remove non-numeric characters and parse price
//       const parsedPrice = parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0;
//       console.log("Parsed Price:", parsedPrice); // Log parsed price
  
//       const existingItem = acc.find((i) => i.title === item.title);
//       if (existingItem) {
//         existingItem.quantity += 1;
//         existingItem.totalPrice += parsedPrice; // Accumulate totalPrice if item already exists
//       } else {
//         acc.push({
//           ...item,
//           price: parsedPrice,
//           quantity: 1,
//           totalPrice: parsedPrice,
//         });
//       }
//       return acc;
//     }, []);
  
//     setCartItems(uniqueItems);
//   }, [initialCartItems]);
  
  
//   // Function to handle increasing quantity and updating total price
//   const handleAdd = (title) => {
//     setCartItems((prevItems) =>
//       prevItems.map((cartItem) =>
//         cartItem.title === title
//           ? {
//               ...cartItem,
//               quantity: cartItem.quantity + 1,
//               totalPrice: (cartItem.quantity + 1) * cartItem.price,
//             }
//           : cartItem
//       )
//     );
//   };

//   // Function to handle decreasing quantity and updating total price
//   const handleRemove = (title) => {
//     setCartItems((prevItems) =>
//       prevItems.map((cartItem) =>
//         cartItem.title === title && cartItem.quantity > 1
//           ? {
//               ...cartItem,
//               quantity: cartItem.quantity - 1,
//               totalPrice: (cartItem.quantity - 1) * cartItem.price,
//             }
//           : cartItem
//       )
//     );
//   };

//   return (
//     <div class="Cartpage">
//       <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p className="text-gray-600">Your cart is empty.</p>
//       ) : (
//         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {cartItems.map((item, index) => (
//             <li key={index} className="flex items-center border rounded-lg shadow-md overflow-hidden p-4">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-24 h-24 object-cover mr-4"
//               />
//               <div className="flex flex-col">
//                 <h3 className="text-lg font-semibold">{item.title}</h3>
//                 <p className="text-gray-500">Price: ₹{item.price.toFixed(2)}</p>
//                 <p className="text-gray-500 flex items-center">
//                   <FiMinusCircle
//                     onClick={() => handleRemove(item.title)}
//                     className="text-red-500 cursor-pointer"
//                   />
//                   <span className="mx-2">{item.quantity}</span>
//                   <IoAddCircleOutline
//                     onClick={() => handleAdd(item.title)}
//                     className="text-green-500 cursor-pointer"
//                   />
//                 </p>
//                 <p className="text-gray-700 font-bold">
//                   Total: ₹{item.totalPrice.toFixed(2)}
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CartPage;

// CartPage.js
import React, { useState, useContext, useEffect } from 'react';
import { FiMinusCircle } from 'react-icons/fi';
import { IoAddCircleOutline } from 'react-icons/io5';
import { CartContext } from './CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems: initialCartItems } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const uniqueItems = initialCartItems.reduce((acc, item) => {
      const parsedPrice = parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0;

      const existingItem = acc.find((i) => i.title === item.title);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += parsedPrice;
      } else {
        acc.push({
          ...item,
          price: parsedPrice,
          quantity: 1,
          totalPrice: parsedPrice,
        });
      }
      return acc;
    }, []);

    setCartItems(uniqueItems);
  }, [initialCartItems]);

  const handleAdd = (title) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.title === title
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              totalPrice: (cartItem.quantity + 1) * cartItem.price,
            }
          : cartItem
      )
    );
  };

  const handleRemove = (title) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.title === title && cartItem.quantity > 1
          ? {
              ...cartItem,
              quantity: cartItem.quantity - 1,
              totalPrice: (cartItem.quantity - 1) * cartItem.price,
            }
          : cartItem
      )
    );
  };

  // Calculate the overall total amount
  const overallTotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div className="Cartpage flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow">
          {cartItems.map((item, index) => (
            <li key={index} className="flex items-center border rounded-lg shadow-md overflow-hidden p-4">
  <img
    src={item.image}
    alt={item.title}
    className="w-24 h-24 object-cover mr-4"
  />
   <div className="CartItemContent"> {/* Ensure this class is applied */}
        <h3>{item.title}</h3>
        <p>Price: ₹{item.price.toFixed(2)}</p>
    <p className="text-gray-500 flex items-center mb-2">
      <FiMinusCircle
        onClick={() => handleRemove(item.title)}
        className="text-red-500 cursor-pointer"
      />
      <span className="mx-2">{item.quantity}</span>
      <IoAddCircleOutline
        onClick={() => handleAdd(item.title)}
        className="text-green-500 cursor-pointer"
      />
    </p>
    <p className="text-gray-700 font-bold">
      Total: ₹{item.totalPrice.toFixed(2)}
    </p>
  </div>
</li>

          ))}
        </ul>
      )}
      {/* Total Amount Section */}
      <div className="flex justify-between items-center mt-6 p-4 border-t border-gray-300">
        <h3 className="text-xl font-semibold">Total Amount: ₹{overallTotal.toFixed(2)}</h3>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default CartPage;
