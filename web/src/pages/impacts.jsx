import React from 'react';
import Navbar from '../navbar/navbar.jsx';
import './impacts.css';

import elderImg from '/assets/images/elderIcon.webp';
import volunteersImg from '/assets/images/volunteerIcon.webp';
import handshakeImg from '/assets/images/handshakeIcon.webp';
import elderyouthImg from '/assets/images/elderyouth.webp'; 
import testimony1 from '/assets/images/testimonyholder.webp'; 

const Impacts = () => {
  return (
    <div className="impacts-page">
      <Navbar />

      {/* Title Section */}
      <section className="impact-title-section">
        <h1>Impact</h1>
      </section>

      {/* Hero Section */}
      <section className="impact-hero-section">
        <div className="impact-hero-text">
          <h2>Every memory preserved is a legacy saved.</h2>
          <p>
            See how our community is reconnecting generations — one story at a time.
          </p>
        </div>
        <img src={elderyouthImg} alt="Elder and youth illustration" className="impact-hero-image" />
      </section>

      {/* Stats Section */}
      <section className="impact-stats-section">
        <div className="impact-stat-card">
          <img src={elderImg} alt="Elder icon" />
          <h3>10</h3>
          <p>stories captured from seniors across our communities</p>
        </div>
        <div className="impact-stat-card">
          <img src={volunteersImg} alt="Volunteers icon" />
          <h3>25</h3>
          <p>student volunteers help run this project</p>
        </div>
        <div className="impact-stat-card">
          <img src={handshakeImg} alt="Partnership icon" />
          <h3>5</h3>
          <p>partnerships in making the world a better place</p>
        </div>
      </section>

      {/* Testimonies Section */}
      <section className="impact-testimonies-section">
        <h2>What People Are Saying</h2>
        <div className="testimonies-grid">
          <img src={testimony1} alt="Testimony 1" className="testimony-image" />
          <img src={testimony1} alt="Testimony 2" className="testimony-image" />
        </div>
      </section>
    </div>
  );
};

export default Impacts;
