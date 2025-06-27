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

      <div className='title-text'>
        <h2>Impact</h2>
      </div>

      <div className="impact-hero-section">
        <div className="impact-text">
          <h2>Every memory preserved is a legacy saved.</h2>
          <p>
            See how our community is reconnecting generations — one story at a time.
          </p>
        </div>
        <img src={elderyouthImg} alt="Elder and youth illustration" className="impact-hero-image" />
      </div>

      <div className="impact-stats">
        <div className="impact-stat">
          <img src={elderImg} alt="Elder icon" />
          <h3>10</h3>
          <p>stories captured from seniors across our communities</p>
        </div>
        <div className="impact-stat">
          <img src={volunteersImg} alt="Volunteers icon" />
          <h3>25</h3>
          <p>student volunteers help run this project</p>
        </div>
        <div className="impact-stat">
          <img src={handshakeImg} alt="Partnership icon" />
          <h3>5</h3>
          <p>partnerships in making the world a better place</p>
        </div>
      </div>

      <div className="impact-testimonies">
        <img src={testimony1} alt="Testimony 1" />
        <img src={testimony1} alt="Testimony 1" />
      </div>
    </div>
  );
};

export default Impacts;
