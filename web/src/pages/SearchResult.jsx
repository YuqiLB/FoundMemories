import React from 'react'
import "./SearchResult.css"

const SearchResult = ({result, onSelect}) => {
  return (
    <div
      className="search-result"  onClick={() => onSelect(result)}
    >
      <p className="result-title">{result.title}</p>
      {//<p className="result-description">{result.description}</p>
      }
    </div>
  )
}

export default SearchResult