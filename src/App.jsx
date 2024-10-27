import React from 'react';
import './components/Shop.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import
import Navbar from './components/Navbar';
import Services from './components/Services';
import Footer from './components/Footer';
import Shop from './components/Shop';
import Book from './components/Book';
import Home from './Pages/Home';
import DogFood from './components/DogFood';
import Grooming from './components/Grooming';
import { useRef } from 'react';
import { useState } from 'react';
import { CartContextProvider } from './components/CartContext';
import CartPage from './components/CartPage';
import ShopPage from './components/ShopPage';

function App() {
  const servicesRef = useRef(null); 
  const [cart, setCart] = useState([]);
  return (
    <CartContextProvider>
      <Router>
        <Navbar servicesRef={servicesRef}/> 
        <Routes>
          <Route path="/" element={<Home servicesRef={servicesRef} />} /> {/* Pass the ref to Home */}
          <Route path='/services' element ={<Services/>}/>
          <Route path="/book" element={<Book />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/dog-food" element={<DogFood />} />
          <Route path="/grooming" element={<Grooming />} />
          <Route path="/" element={<ShopPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
        </Routes>
        <Footer /> 
      </Router>
    </CartContextProvider>
  );
}
export default App;
