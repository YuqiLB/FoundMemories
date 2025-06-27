import React from 'react';
import Navbar from '../navbar/navbar.jsx';
import './events.css';

const Events = () => {
  return (
    <div className="events-page">
      <Navbar />

      <div className="events-content">
        <h1>Upcoming Events</h1>
        <p>Stay connected and get involved! Join us at upcoming events that celebrate storytelling, community, and intergenerational connection.</p>

        <div className="event-list">
          {/* Example Event 1 */}
          <div className="event-card">
            <h2>Storytelling Workshop</h2>
            <p><strong>Date:</strong> July 10, 2025</p>
            <p><strong>Location:</strong> Calgary Central Library</p>
            <p>Join our team to learn how to conduct powerful interviews and transform oral histories into compelling narratives. Open to all youth ages 14–22.</p>
          </div>

          {/* Example Event 2 */}
          <div className="event-card">
            <h2>Animated Story Premiere</h2>
            <p><strong>Date:</strong> August 3, 2025</p>
            <p><strong>Location:</strong> Online via YouTube Live</p>
            <p>Watch the debut of two brand-new short films based on the lives of Calgary seniors, created by our volunteer animators and writers.</p>
          </div>

          {/* Example Event 3 */}
          <div className="event-card">
            <h2>Community Memory Fair</h2>
            <p><strong>Date:</strong> September 15, 2025</p>
            <p><strong>Location:</strong> Southland Community Hall</p>
            <p>Come share your memories or listen to others. Booths, performances, and interactive exhibits for all ages. Entry is free!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
