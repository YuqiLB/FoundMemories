import React from 'react';
import './events.css';
import Navbar from '../navbar/navbar';
import calendarIcon from '/assets/images/calendar.png'; 
import placeholderImage from '/assets/images/Placeholder.png'; 
import elderyouthImg from '/assets/images/elderyouth.webp'; 

const Events = () => {
  return (
    <div className="events-page">
      <Navbar />
      <h2 className="events-title">Upcoming Events</h2>

      <div className="timeline">
        {[1, 2, 3].map((event, index) => (
          <div className="timeline-row" key={index}>
            <div className="event-date">Date</div>
            <img src={calendarIcon} alt="calendar icon" className="calendar-icon" />
            <div className="event-details">
              <h3>Event Name</h3>
              <p>Event description</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="events-title">Past Events</h2>
      <div className="past-events">
        {[1, 2, 3].map((_, i) => (
          <div className="past-event-card" key={i}>
            <img src={placeholderImage} alt="Past Event" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
