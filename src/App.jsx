// import React from 'react';
// import { BrowserRouter,Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Product from './components/Product';
// import Section from './components/Section';
// import Services from './components/Services';
// import Newsletter from './components/Newsletter';
// import Testimonials from './components/Testimonials';
// import RecentArticles from './components/Articles';
// import Footer from './components/Footer';
// import Items from './components/Items';
// import Recomended from './components/Recomended';
// import Shop from './components/Shop';
// import DogProduct from './components/DogProduct';
// import Book from './components/Book'; // Make sure Book is correctly imported

// function App() {
//   return (
//     <Router> {/* Wrap the app in BrowserRouter */}
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/book" element={<Book />} />
//       </Routes>
     
//       <Routes>
//         <Route path="/" element={<Services />} />   {/* Home page with services */}
//         <Route path="/shop" element={<Shop />} />   {/* Shop page */}
//       </Routes>
//       {/* <Services /> */}
//       <Product />
//       <Recomended />
//       {/* <Shop /> */}
//       {/* <DogProduct /> */}
//       {/* <Items /> */}
//       <RecentArticles />
//       <Section />
//       {/* <Testimonials /> */}
//       {/* <Newsletter /> */}
//       <Footer />
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Product from './components/Product';
import Section from './components/Section';
import Services from './components/Services';
import Newsletter from './components/Newsletter';
import Testimonials from './components/Testimonials';
import RecentArticles from './components/Articles';
import Footer from './components/Footer';
import Items from './components/Items';
import Recomended from './components/Recomended';
import Shop from './components/Shop';
import DogProduct from './components/DogProduct';
import Book from './components/Book';
import Home from './Pages/Home';
import DogFood from './components/DogFood';
import Grooming from './components/Grooming';
import Animated from './components/Animated';
import { useRef } from 'react';
import { useState } from 'react';

// function App() {
//   return (
//     <Router> {/* Use BrowserRouter correctly */}
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/book" element={<Book />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/shop" element={<Shop />} /> 
//         <Route path="/dog-food" element={<DogFood />} /> 
//         <Route path="/grooming" element={<Grooming/>} /> 
//         {/* Add more routes as needed */}
//         </Routes>
//         <Footer/>
//     </Router>
//   );
// }

function App() {
  const servicesRef = useRef(null); // Reference to the Services section
  const [cartItems, setCartItems] = useState(0);
  const addToCart = () => {
    setCartItems(cartItems + 1);
  };
  return (
    <Router>
      <Navbar servicesRef={servicesRef} /> {/* Pass the reference to the Navbar */}
      <Navbar cartItems={cartItems} />
      <Recomended addToCart={addToCart} />
      {/* Define your Routes */}
      <Routes>
        <Route path="/" element={<Home servicesRef={servicesRef} />} /> {/* Pass the ref to Home */}
        <Route path="/book" element={<Book />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/dog-food" element={<DogFood />} />
        <Route path="/grooming" element={<Grooming />} />
        {/* Add more routes as needed */}
      </Routes>

      <Footer /> {/* Your Footer component */}
    </Router>
  );
}
export default App;
