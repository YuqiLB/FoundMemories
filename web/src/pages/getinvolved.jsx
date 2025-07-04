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
      <p className="involved-subtitle">
        Join FoundMemories in preserving the stories that matter
      </p>

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

      {/* Expanded role descriptions */}
      <div id="roles-details" className="detailed-roles-section">
        <div className="detailed-role-column">
          <h3>🎤<strong>Story Extractor</strong>🎤</h3>
          <p>
            You're the heart of FoundMemories. As a Story Extractor, you’ll connect one-on-one with a senior to gently
            uncover their most meaningful memories. Whether it’s a childhood tale from another country, a war story, or
            a family tradition, you help bring it to light — with empathy, curiosity, and care.
          </p>
          <p><strong>Perfect for you if:</strong> You love listening, asking thoughtful questions, and turning a simple
            conversation into something powerful. You don’t need to be an expert interviewer — just a kind and patient
            listener.</p>
          <div className="role-image-placeholder">Actual picture of these roles</div>
        </div>

        <div className="detailed-role-column middle">
          <h3>🎨<strong>Animator/Illustrator</strong>🎨</h3>
          <p>
            Bring someone’s memory to life — literally. As an animator or illustrator, you’ll take the stories shared by
            seniors and transform them into short, engaging visuals. This could mean sketching key moments, animating
            transitions, or building out the final cartoon.
          </p>
          <p><strong>Perfect for you if:</strong> You’re creative and excited by the idea of using art for storytelling.
            Whether you’re into frame-by-frame animation or just great at illustrating scenes, your skills will give life
            to voices that deserve to be seen and heard.</p>
          <div className="role-image-placeholder">Actual picture of these roles</div>
        </div>

        <div className="detailed-role-column">
          <h3>🤝<strong>Partnerships & Outreach</strong>🤝</h3>
          <p>
            Help us grow our impact. You’ll reach out to schools, senior homes, local nonprofits, and community groups to
            build partnerships that expand our network.
          </p>
          <p><strong>Perfect for you if:</strong> You enjoy talking to people, writing persuasive messages, or organizing
            community efforts. A great role if you’re passionate about spreading the word and making big things happen
            behind the scenes.</p>
          <div className="role-image-placeholder">Actual picture of these roles</div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
