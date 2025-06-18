import React from 'react';
import "./indexPage.css";
import Navbar from '../navbar/navbar.jsx';

const navItems = [
  { name: 'Story Archives', link: '#storyarchives' },
];

function App() {
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="Page">
      <Navbar />
      
      <div className="centered-intro">
        <h1>Giving a voice to the past, a legacy for the future</h1>
        <p>Discover an organization dedicated to preserving the untold stories of our elders through youth-led creativity</p>
      </div>

      <nav>
        <ul style={{ listStyle: 'none', padding: 10, textAlign: 'center' }}>
          {navItems.map((item) => (
            <li key={item.name} className="nav-item">
              {item.name === 'Story Archives' ? (
                <button
                  className="nav-button"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('storyarchives');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.name}
                </button>
              ) : (
                <a href={item.link} className="nav-link">
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>

    
      <div className="main-content">
        <img
          src="/src/assets/images/HomePage4People.png"
          alt="People sharing stories"
          className="intro-image"
        />
      
        <div className="sharing-stories">
          <section id="about">
            <h2>Sharing Stories, Building Community</h2>
            <p>Every life holds a story worth sharing — stories filled with wisdom, resilience and love that risk being lost if we do nothing. At FoundMemories, we work to preserve these voices by connecting youth with seniors across Calgary. Through meaningful interviews and creative animation, we transform their memories into short animated films that live on as a public archive — educating, inspiring and bridging generational gaps. In doing so, we strengthen the fabric of our community — one story at a time</p>
          </section>
        </div>



        <div className="mission">
          <div className="mission-top">
            <section id="mission-half">
              <h2>Our Mission & Story</h2>
            <div className="paragraphs">
                <p>
                  FoundMemories started with a simple but urgent truth: time doesn’t wait — and every untold story is a legacy that could disappear.
                  We’re a youth-led nonprofit on a mission to preserve the life stories of seniors by turning their memories into short animated films.
                  But we’re not just recording the past. We’re reconnecting generations. We’re giving elders a voice, and giving young people a way to lead with empathy and purpose.
                </p>
            </div>
            </section>

            <img
              src="/src/assets/images/Placeholder.png"
              alt="Placeholder"
              className="mission-image"
            />
          </div>

          <div className="mission-bottom">
            <section id="mission-fill">
                <p>It all began with one conversation — a quiet, unexpected moment between a grandson and his grandfather. That single memory became our first story. And it reminded us of something deeply simple: listening can be transformative. </p>

                <p> Since then, we’ve grown into a team of young interviewers, writers, and animators, working together to capture the voices and wisdom of those who helped shape our communities.
                  Our mission is about more than saving stories. It’s about changing how we see our elders. It’s about giving youth a meaningful role in preserving history. And it’s about helping communities hold onto what really matters.
                </p>
                
                <p>Because if we don’t listen now, some voices may never be heard again.</p>
            </section>
          </div>
          <section id="team">
            <h2>Our Team</h2>
            <p> Team Members</p>

            <img
              src="/src/assets/images/circlePlaceholder.png"
              alt="teamPlaceholder"
              className="team-image1"
            />
            <img
              src="/src/assets/images/circlePlaceholder.png"
              alt="teamPlaceholder"
              className="team-image2"
            />
            <img
              src="/src/assets/images/circlePlaceholder.png"
              alt="teamPlaceholder"
              className="team-image3"
            />
            <img
              src="/src/assets/images/circlePlaceholder.png"
              alt="teamPlaceholder"
              className="team-image4"
            />
            <img
              src="/src/assets/images/circlePlaceholder.png"
              alt="teamPlaceholder"
              className="team-image5"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
