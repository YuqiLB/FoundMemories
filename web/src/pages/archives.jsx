// src/pages/archives.jsx
import React from 'react';
import Navbar from '../navbar/navbar.jsx';
import './archives.css';
import Youtube from 'react-youtube-embed';

// Future stories can be added here
const stories = [
  // Example format:
  // {
  //   title: "Grandma's Memories",
  //   image: "/src/assets/images/story1.png",
  //   link: "/stories/story1"
  // }
  <Youtube id = 'OLcJAbCOmoc'/>
];

const Archives = () => {
  return (
    <div className="archives-page">
      <Navbar />
      <div className="archives-container">
        <h1 className="archives-title">Our Stories</h1>
        {/*
        {stories.length === 0 ? (
          <p className="no-stories-text">No stories available yet. Check back soon!</p>
        ) : (
          <div className="story-list">
            {stories.map((story, index) => (
              <a key={index} href={story.link} className="story-card">
                <img src={story.image} alt={story.title} className="story-image" />
                <h2 className="story-title">{story.title}</h2>
              </a>
            ))}
          </div>
        )}*/}
        <div className="storystory">
          <Youtube id = 'OLcJAbCOmoc' className="Story1"/>
        </div>
        
      </div>
      
    </div>
  );
};

export default Archives;
