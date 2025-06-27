import React from 'react';
import Navbar from '../navbar/navbar.jsx';
import './getinvolved.css';

const GetInvolved = () => {
  return (
    <div className="get-involved-page">
      <Navbar />

      <div className="get-involved-content">
        <h1>Get Involved</h1>
        <p>Be a part of the movement to preserve stories and connect generations in meaningful ways. Whether you’re a student, professional, or supporter — there’s a place for you here.</p>

        <section className="involved-section">
          <h2>Volunteer with Us</h2>
          <p>Join our team of youth volunteers who interview seniors, write scripts, and create animations. No experience necessary — just a passion for stories and community.</p>
        </section>

        <section className="involved-section">
          <h2>Partner with Us</h2>
          <p>We're always looking to collaborate with community centers, schools, senior homes, and media organizations. Let's work together to make memories last.</p>
        </section>

        <section className="involved-section">
          <h2>Donate</h2>
          <p>Your support helps us cover the cost of recording equipment, animation software, training workshops, and public showcases. Every contribution helps amplify a voice.</p>
          <button className="donate-button">Make a Donation</button>
        </section>

        <section className="involved-section">
          <h2>Contact Us</h2>
          <p>Have questions or ideas? Reach out through our <a href="/contact">contact page</a>.</p>
        </section>
      </div>
    </div>
  );
};

export default GetInvolved;
