// // ShopPage.jsx

// import React, { useState } from 'react';
// import Recomended from './Recomended'; // Adjust the import path if necessary
// import { CartContextProvider } from './CartContext'; // Adjust the import path accordingly

// const ShopPage = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const AddToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//     console.log("Item added to cart:", item); // Optional: log the added item for debugging
//   };

//   return (
//     <CartContextProvider value={{ cartItems }}>
//       <div>
//         <h1 className="text-3xl font-bold mb-4">Our Products</h1>
//         <Recomended AddToCart={AddToCart} />
//         {/* You can render other components here, like a cart summary or other product listings */}
//       </div>
//     </CartContextProvider>
//   );
// };

// export default ShopPage;

// ShopPage.jsx

import React from 'react';
import Recomended from './Recomended'; // Adjust the import path if necessary
import { CartContextProvider } from './CartContext'; // Ensure the path is correct

const ShopPage = () => {
  return (
    <CartContextProvider>
      <div>
        <h1 className="text-3xl font-bold mb-4">Our Products</h1>
        <Recomended />
        {/* You can render other components here, like a cart summary or other product listings */}
      </div>
    </CartContextProvider>
  );
};

export default ShopPage;
