import React from 'react'
import './Contact.css'
import msg_icon from '../assets/consult.jpg'
import mail_icon from '../assets/consult.jpg'
import phone_icon from '../assets/consult.jpg'
import location_icon from '../assets/consult.jpg'
import { SiGmail } from "react-icons/si";
import { CgMail } from "react-icons/cg";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7061b8c2-ff86-4a03-acf7-bede56285ce8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }

  return (
    <>
    <h3 className="text-4xl font-bold mb-6 text-center text-blue-600">Contact Us</h3>
    <div className='contact'>
        <div className='contact-col'>
            <h3 className="ml-2">Send Us A Message <FiMessageSquare/></h3>
            <p>Feel free to reach out through contact form or 
            find our contact information below.Your feedback,questions,
            and suggestions are important to us as we strive to provide
            exceptional service to our community.</p>
            <ul>
                <li><CgMail/>harstuti@gmail.com</li>
                <li><IoCallOutline/>9495039204</li>
                <li><IoLocationOutline/>Delhi</li>
            </ul>
        </div>
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label htmlFor="">Phone Number</label>
            <input type="text" name='phone' placeholder='Enter your mobile number' required />
            <label htmlFor="">Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
            <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                  Submit Now
                </button>          
              </form>
          <span>{result}</span>
        </div>
    </div>
    </>
  )
}

export default Contact