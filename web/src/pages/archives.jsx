// src/pages/archives.jsx
import React from 'react';
import Navbar from '../navbar/navbar.jsx';
import './archives.css';
import Youtube from 'react-youtube-embed';
import SearchBar from './searchbar.jsx';
import SearchResultsList from './SearchResultsList.jsx';
import {useState} from "react";

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
  const [results, setResults] = useState([]);
  return (
    <div className="archives-page">
      <Navbar />
      <div className="archives-container">
        <h1 className="archives-title">Our Stories</h1>
        <SearchBar setResults = {setResults}/>
        <SearchResultsList results={results}/>
        
        <div className="storystory">
          <Youtube id = 'OLcJAbCOmoc' className="Story1"/>
        </div>
        
      </div>
      
    </div>
  );
};

export default Archives;
