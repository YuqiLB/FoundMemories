import React from 'react';
import './events.css';
import Navbar from '../navbar/navbar';
// Use public URLs for images in `public/assets/images` instead of importing them
// (Vite resolves `public/` assets via absolute paths at runtime)

const Events = () => {
  return (
    <div className="events-page">
      <Navbar />
      <h2 className="events-title">Upcoming Events</h2>

      <div className="timeline">
        {[1, 2, 3].map((event, index) => (
          <div className="timeline-row" key={index}>
            <div className="event-date">Date</div>
            <img src="/assets/images/calendar.png" alt="calendar icon" className="calendar-icon" />
            <div className="event-details">
              <h3>Event Name</h3>
              <p className="">Event description</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="events-title">Past Events</h2>
      <div className="past-events">
        {[1, 2, 3].map((_, i) => (
          <div className="past-event-card" key={i}>
            <img src="/assets/images/Placeholder.png" alt="Past Event" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
