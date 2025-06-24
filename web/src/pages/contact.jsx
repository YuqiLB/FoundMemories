// src/pages/contact.jsx
import React from 'react';
import Navbar from '../navbar/navbar.jsx';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">We’d love to hear from you! Whether you have questions, ideas, or want to get involved — reach out!</p>

        <div className="contact-details">
          <p><strong>Email:</strong> <a href="mailto:info@foundmemories.org">info@foundmemories.org</a></p>
          <p><strong>Instagram:</strong> <a href="https://instagram.com/foundmemories" target="_blank" rel="noopener noreferrer">@foundmemories</a></p>
          <p><strong>Location:</strong> Calgary, AB, Canada</p>
        </div>

        {/* Optional future form */}
        {/* <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form> */}
      </div>
    </div>
  );
};

export default Contact;
