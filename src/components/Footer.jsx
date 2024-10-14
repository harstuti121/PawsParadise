// // src/components/Footer.jsx
// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-yellow-100 text-gray-700 ">
//       <div className="container mx-auto px-6 md:px-12 lg:px-20">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
//           {/* Company Info */}
//           <div className="pt-8">
//             <h2 className="text-2xl font-bold mb-4 ">Patte</h2>
//             <p className="text-gray-600">
//               Take care of your lovely pets. We are your number one trusted pet boarding service company.
//             </p>
//           </div>
          
//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><a href="#about" className="hover:underline ">About Us</a></li>
//               <li><a href="#services" className="hover:underline">Services</a></li>
//               <li><a href="#shop" className="hover:underline">Shop</a></li>
//               <li><a href="#contact" className="hover:underline">Contact Us</a></li>
//             </ul>
//           </div>
          
//           {/* Working Hours */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
//             <ul className="space-y-2">
//               <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
//               <li>Sat: 10:00 AM - 4:00 PM</li>
//               <li>Sun: Closed</li>
//             </ul>
//             <form className="inline-block">
//           <input type="email" placeholder="Email Address" className="px-4 py-2 rounded-lg"/>
//           <button className="bg-red-500 px-6 py-2 rounded-lg text-white ml-2">Subscribe</button>
//         </form>
//           </div>
//         </div>

//         {/* Social Media Links */}
//         <div className="mt-8 flex justify-center md:justify-between items-center">
//           <p className="text-sm">© 2024 Harstuti. All rights reserved.</p>
//           <div className="space-x-4">
//             <a href="https://facebook.com" className="text-gray-600 hover:text-gray-900">Facebook</a>
//             <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900">Twitter</a>
//             <a href="https://instagram.com" className="text-gray-600 hover:text-gray-900">Instagram</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-gray-700">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div className="pt-8">
            <h2 className="text-3xl font-bold mb-2">PawsParadise</h2>
            <p className="text-gray-600 text-1xl ">
              Take care of your lovely pets. <br />We are your number one trusted pet <br /> boarding service company.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold ">Quick Links</h3>
            <a href="#about" style={{ textDecoration: 'none' ,justifyContent:'flex-start'}} className="hover:underline">About Us</a><br />
            <a href="#about" style={{ textDecoration: 'none' }} className="hover:underline">Services</a><br />
            <a href="#about" style={{ textDecoration: 'none' }} className="hover:underline">Shop</a><br />
            <a href="#about" style={{ textDecoration: 'none' }} className="hover:underline">Contact Us</a>
          </div>
          
          {/* Working Hours */}
          <div className="text-start">
            <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
            <p>Mon - Fri: 9:00 AM - 6:00 PM <br />Sat: 10:00 AM - 4:00 <br />Sun: Closed</p>
            <form className="flex mt-4">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-start" 
            />

              <button className="bg-red-500 px-6 py-2 rounded-lg text-white ml-2 hover:bg-red-600">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2024 Harstuti. All rights reserved.</p>
          {/* <div className="space-x-4">
            <a href="https://facebook.com" className="text-gray-600 hover:text-gray-900">Facebook</a>
            <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900">Twitter</a>
            <a href="https://instagram.com" className="text-gray-600 hover:text-gray-900">Instagram</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
