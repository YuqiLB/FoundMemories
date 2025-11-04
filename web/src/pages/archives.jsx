// src/pages/archives.jsx
import React from 'react';
import Navbar from '../navbar/navbar.jsx';
import './archives.css';
import Youtube from 'react-youtube-embed';
import SearchBar from './searchbar.jsx';
import SearchResultsList from './SearchResultsList.jsx';
import {useState, useRef} from "react";


const stories = [
  {
    title: "FoundMemories: Preserving a Senior's Story in Animation | True Story Animated",
    id: "OLcJAbCOmoc",
    description:
      "At FoundMemories, we preserve the life stories of seniors by turning their memories into short animated films. This 4-minute true story is our very first animation, created to honor a senior's past and make sure their voice is not forgotten. 💡 Why FoundMemories? Every untold story is a legacy that could vanish. We’re a youth-led nonprofit dedicated to saving these memories and reconnecting generations. 👉 Follow us on Instagram: @foundmemoriesofficial 👉 Visit our website: foundmemories.org"
  },
];



const Archives = () => {
  const [results, setResults] = useState([]);
  const storyRefs = useRef([]);

  const handleSelect = (storyIndex) => {
    const ref = storyRefs.current[storyIndex];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  return (
    <div className="archives-page">
      <Navbar />
      <div className="archives-container">
        <h1 className="archives-title">Our Stories</h1>
        <SearchBar stories={stories} setResults = {setResults}/>
        <SearchResultsList results={results} onSelect={(story) => {
          const index = stories.findIndex((s) => s.title === story.title);
            handleSelect(index);
          }}
        />
         <div className="story-list">
          {stories.map((story, index) => (
            <div
              key={index}
              ref={(el) => (storyRefs.current[index] = el)}
              className="story-item"
            >
              <h2 className="story-title">{story.title}</h2>
              <Youtube id={story.id} className="story-video" />
              <p className="story-description">{story.description}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Archives;
