import React, {useState} from 'react'

import "./searchbar.css"
import {FaSearch} from "react-icons/fa"

const SearchBar = ({stories,setResults}) => {
    const [input, setInput] = useState("");

    const handleChange = (value) => {
        setInput(value);    
    
    const filteredResults = stories.filter((story) =>
      story.title.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filteredResults);
  };
  return (
    <div className="input-wrapper">
        <FaSearch id = "search-icon" />
        <input placeholder = "Type to search..." 
        value={input} 
        onChange={(e) => handleChange(e.target.value)}        
        />
    </div>
  );
};
export default SearchBar