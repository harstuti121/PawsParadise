// import React, { useState, useEffect, useRef } from 'react';
// import { BsCart3 } from "react-icons/bs";
// import { IoIosNotificationsOutline } from "react-icons/io";

// export default function Navbar() {
//   // State to manage the currently active dropdown
//   const [activeDropdown, setActiveDropdown] = useState(null);
  
//   // Ref to the navbar element to detect outside clicks
//   const navbarRef = useRef(null);

//   // Function to toggle dropdown visibility
//   const toggleDropdown = (menu) => {
//     setActiveDropdown((prevMenu) => (prevMenu === menu ? null : menu));
//   };

//   // Effect to handle closing dropdowns when clicking outside the navbar
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navbarRef.current && !navbarRef.current.contains(event.target)) {
//         setActiveDropdown(null); // Close dropdown if clicked outside
//       }
//     };

//     // Add event listener when the component mounts
//     document.addEventListener('mousedown', handleClickOutside);

//     // Cleanup event listener when the component unmounts
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav ref={navbarRef} className="bg-gray-800 shadow-lg py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-2xl font-bold text-yellow-500">PawsParadise</div>
//         <ul className="flex space-x-8 text-white relative">
          
//           {/* Home Dropdown */}
//           <li className="relative">
//             <div
//               className="cursor-pointer"
//               onClick={() => toggleDropdown('home')}
//             >
//               Home
//             </div>
//             {activeDropdown === 'home' && (
//               <ul className="absolute top-full left-0 bg-white shadow-lg py-2 w-40 text-black">
//                 <li className="px-4 py-2 hover:bg-pink-50 cursor-pointer">Our Services</li>
//                 <li className="px-4 py-2 hover:bg-pink-50 cursor-pointer">Service Details</li>
//               </ul>
//             )}
//           </li>
          
//           {/* Services Dropdown */}
//           <li className="relative">
//             <div
//               className="cursor-pointer"
//               onClick={() => toggleDropdown('services')}
//             >
//               Services
//             </div>
//             {activeDropdown === 'services' && (
//               <ul className="absolute top-full left-0 bg-white shadow-lg py-2 w-40 text-black">
//                 <li className="px-4 py-2 hover:bg-pink-50 cursor-pointer">Dog Sitting</li>
//                 <li className="px-4 py-2 hover:bg-pink-50 cursor-pointer">Pet Grooming</li>
//                 <li className="px-4 py-2 hover:bg-pink-50 cursor-pointer">Dog Training</li>
//               </ul>
//             )}
//           </li>

//           {/* About Dropdown */}
//           <li className="relative">
//             <div
//               className="cursor-pointer"
//               onClick={() => toggleDropdown('about')}
//             >
//               About
//             </div>
//             {activeDropdown === 'about' && (
//               <ul className="absolute top-full left-0 bg-white shadow-lg py-2 w-40 text-black">
//                 <li className="px-4 py-2 hover:bg-pink-50 cursor-pointer">Our Story</li>
//                 <li className="px-4 py-2 hover:bg-pink-50 cursor-pointer">Meet the Team</li>
//               </ul>
//             )}
//           </li>

//           {/* Shop Dropdown */}
//           <li className="relative">
//             <div
//               className="cursor-pointer"
//               onClick={() => toggleDropdown('shop')}
//             >
//               Shop
//             </div>
//             {activeDropdown === 'shop' && (
//               <ul className="absolute top-full left-0 bg-white shadow-lg py-2 w-40 text-black">
//                 <li className="px-4 py-2 hover:bg-pink-50 cursor-pointer">Pet Supplies</li>
//                 <li className="px-4 py-2 hover:bg-pink-50 cursor-pointer">Accessories</li>
//               </ul>
//             )}
//           </li>

//           {/* Contact Dropdown */}
//           <li className="relative">
//             <div
//               className="cursor-pointer"
//               onClick={() => toggleDropdown('contact')}
//             >
//               Contact
//             </div>
//             {activeDropdown === 'contact' && (
//               <ul className="absolute top-full left-0 bg-white shadow-lg py-2 w-40 text-black">
//                 <li className="px-4 py-2 hover:bg-pink-50 cursor-pointer">Contact Us</li>
//                 <li className="px-4 py-2 hover:bg-pink-50 cursor-pointer">Support</li>
//               </ul>
//             )}
//           </li>

//         </ul>

//         <div className="flex items-center space-x-4">
//             {/* Add to Cart Button with Image */}
//             <button className="bg-yellow-500 p-2 rounded focus:outline-none">
//               <IoIosNotificationsOutline />
//             </button>

//             {/* Notification Button with Image */}
//             <button className="bg-yellow-500 p-2 rounded focus:outline-none">
//               <BsCart3 />
//             </button>
//         </div>      
//       </div>
//     </nav>
//   );
// }
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { BsCart3 } from "react-icons/bs";
// import { IoIosNotificationsOutline } from "react-icons/io";

// export default function Navbar({ servicesRef }) {
//   const navigate = useNavigate();

//   const scrollToServices = () => {
//     servicesRef.current?.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
//   };

//   return (
//     <nav className="bg-gray-800 shadow-lg py-4 fixed top-0 left-0 w-full z-50">
//     <div className="container mx-auto flex justify-between items-center">
//       <div
//         className="text-2xl font-bold text-yellow-500 cursor-pointer"
//         onClick={() => navigate('/')}
//       >
//         PawsParadise
//       </div>
//       <ul className="flex space-x-8 text-white">
//         <li className="cursor-pointer" onClick={() => navigate('/')}>Home</li>
//         <li className="cursor-pointer" onClick={scrollToServices}>Services</li> {/* Smooth scroll */}
//         <li className="cursor-pointer" onClick={() => navigate('/shop')}>Shop</li>
//         <li className="cursor-pointer" onClick={() => navigate('/book')}>Book</li>
//         <li className="cursor-pointer" onClick={() => navigate('/grooming')}>Grooming</li>
//       </ul>
  
//       <div className="flex items-center space-x-4">
//         <button className="bg-yellow-500 p-2 rounded focus:outline-none">
//           <IoIosNotificationsOutline />
//         </button>
//         <button className="bg-yellow-500 p-2 rounded focus:outline-none">
//           <BsCart3 />
//         </button>
//       </div>
//     </div>
//   </nav>
  
//   );
// }

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Navbar({ cartItems }) {
  const navigate = useNavigate();

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
          <button className="bg-yellow-500 p-2 rounded focus:outline-none">
            <IoIosNotificationsOutline />
          </button>
          
          <button className="bg-yellow-500 p-2 rounded focus:outline-none relative">
            <BsCart3 />
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
                {cartItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
