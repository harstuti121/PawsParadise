
// import React from 'react';
// import './components/Shop.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Product from './components/Product';
// import Section from './components/Section';
// import Services from './components/Services';
// import Newsletter from './components/Newsletter';
// import Testimonials from './components/Testimonials';
// import RecentArticles from './components/Articles';
// import Footer from './components/Footer';
// import Recomended from './components/Recomended';
// import Shop from './components/Shop';
// import DogProduct from './components/DogProduct';
// import Book from './components/Book';
// import Home from './Pages/Home';
// import DogFood from './components/DogFood';
// import Grooming from './components/Grooming';
// import { useRef } from 'react';
// import { useState } from 'react';
// import Cart from './components/ShoppingCart';
// import { CartContextProvider } from './components/CartContext';
// import CartPage from './components/CartPage';
// import ShopPage from './components/ShopPage';

// function App() {
//   const servicesRef = useRef(null); 
//   const [cart, setCart] = useState([]);
//   return (
//     <CartContextProvider>
//       <Router>
//         <Navbar servicesRef={servicesRef}/> 
//         <Routes>
//           <Route path="/" element={<Home servicesRef={servicesRef} />} /> {/* Pass the ref to Home */}
//           <Route path='/services' element ={<Services/>}/>
//           <Route path="/book" element={<Book />} />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/dog-food" element={<DogFood />} />
//           <Route path="/grooming" element={<Grooming />} />
//           <Route path="/" element={<ShopPage/>}/>
//           <Route path='/cart' element={<CartPage/>}/>
//         </Routes>
//         <Footer /> 
//       </Router>
//     </CartContextProvider>
//   );
// }
// export default App;

import React from 'react';
import './components/Shop.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Product from './components/Product';
import Section from './components/Section';
import Services from './components/Services';
import Newsletter from './components/Newsletter';
import Testimonials from './components/Testimonials';
import RecentArticles from './components/Articles';
import Footer from './components/Footer';
import Recomended from './components/Recomended';
import Shop from './components/Shop';
import DogProduct from './components/DogProduct';
import Book from './components/Book';
import Home from './Pages/Home';
import DogFood from './components/DogFood';
import Grooming from './components/Grooming';
import { useRef } from 'react';
import { CartContextProvider } from './components/CartContext';
import CartPage from './components/CartPage';
import ShopPage from './components/ShopPage';

function App() {
  const servicesRef = useRef(null); 

  return (
    <CartContextProvider>
      <Router>
        <Navbar servicesRef={servicesRef}/> 
        <Routes>
          <Route path="/" element={<Home servicesRef={servicesRef} />} /> {/* Main home route */}
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<Book />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/dog-food" element={<DogFood />} />
          <Route path="/grooming" element={<Grooming />} />
          <Route path="/shop-page" element={<ShopPage />} /> {/* Changed path to avoid duplication */}
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer /> 
      </Router>
    </CartContextProvider>
  );
}

export default App;
