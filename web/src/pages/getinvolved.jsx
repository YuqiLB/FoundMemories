import React from 'react';
import './getinvolved.css';
import Navbar from '../navbar/navbar.jsx';
import extractorIcon from '/assets/images/extractor.png';
import animatorIcon from '/assets/images/animator.png';
import outreachIcon from '/assets/images/handshake.png';

const GetInvolved = () => {
  return (
    <div className="involved-container">
      <Navbar />
      <h2 className="involved-title">Ready to Make a Difference?</h2>
      <p className="involved-subtitle">Join FoundMemories in preserving the stories that matter</p>

      <div className="roles-grid">
        <div className="role-card">
          <img src={extractorIcon} alt="Story Extractor" className="role-icon" />
          <h3>Story Extractor</h3>
          <p>Help capture seniors’ stories through interviews and empathy</p>
          <p className="timeline">Project Based Timeline</p>
          <button className="apply-button">Apply Now</button>
        </div>

        <div className="role-card">
          <img src={animatorIcon} alt="Animator" className="role-icon" />
          <h3>Animator/Illustrator</h3>
          <p>Bring stories to life through engaging animations and illustrations</p>
          <p className="timeline">~2hrs/week</p>
          <button className="apply-button">Apply Now</button>
        </div>

        <div className="role-card">
          <img src={outreachIcon} alt="Outreach" className="role-icon" />
          <h3>Partnerships & Outreach</h3>
          <p>Connect with community organizations to expand our impact</p>
          <p className="timeline">~2hrs/week</p>
          <button className="apply-button">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
