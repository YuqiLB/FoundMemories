import React from 'react';
import "./indexPage.css";
import Navbar from '../navbar/navbar.jsx';
import circlePlaceholder from "/assets/images/circlePlaceholder.png";
import HomePage4People from "/assets/images/HomePage4People.png";

function App() {
  return (
    <div className="Page">
      <Navbar />
      
      <section className="top-section">
        <h1>Giving a voice to the past, a legacy for the future</h1>
        <p>Discover an organization dedicated to preserving the untold stories of our elders through youth-led creativity</p>
      </section>


      <section className="content-section about-section">
        <img
          src={HomePage4People}
          alt="People sharing stories"
          className="section-image"
        />
        <div className="section-text">
          <h2>Sharing Stories, Building Community</h2>
          <p>Every life holds a story worth sharing — stories filled with wisdom, resilience and love that risk being lost if we do nothing. At FoundMemories, we work to preserve these voices by connecting youth with seniors across Calgary. Through meaningful interviews and creative animation, we transform their memories into short animated films that live on as a public archive — educating, inspiring and bridging generational gaps. In doing so, we strengthen the fabric of our community — one story at a time</p>
        </div>
      </section>

      <section className="content-section mission-section">
        <img
          src="/assets/images/HomePageGrandfather.png"
          alt="Grandfather sharing story"
          className="section-image"
        />
        <div className="section-text">
          <h2>Our Mission & Story</h2>
          <p>
            FoundMemories started with a simple but urgent truth: time doesn't wait — and every untold story is a legacy that could disappear.
            We're a youth-led nonprofit on a mission to preserve the life stories of seniors by turning their memories into short animated films.
            But we're not just recording the past. We're reconnecting generations. We're giving elders a voice, and giving young people a way to lead with empathy and purpose.
          </p>
        </div>
      </section>

      
      <section className="content-section origin-section">
        <div className="section-text-full">
          <p>It all began with one conversation — a quiet, unexpected moment between a grandson and his grandfather. That single memory became our first story. And it reminded us of something deeply simple: listening can be transformative.</p>

          <p>Since then, we've grown into a team of young interviewers, writers, and animators, working together to capture the voices and wisdom of those who helped shape our communities.
            Our mission is about more than saving stories. It's about changing how we see our elders. It's about giving youth a meaningful role in preserving history. And it's about helping communities hold onto what really matters.
          </p>
          
          <p>Because if we don't listen now, some voices may never be heard again.</p>
        </div>
      </section>

      
      <section className="content-section team-section">
        <h2>Our Team</h2>
        <p className="team-subtitle">Team Members</p>
        <div className="team-grid">
          <img src={circlePlaceholder} alt="Team member 1" className="team-image" />
          <img src={circlePlaceholder} alt="Team member 2" className="team-image" />
          <img src={circlePlaceholder} alt="Team member 3" className="team-image" />
          <img src={circlePlaceholder} alt="Team member 4" className="team-image" />
          <img src={circlePlaceholder} alt="Team member 5" className="team-image" />
        </div>
      </section>
    </div>
  );
}

export default App;
