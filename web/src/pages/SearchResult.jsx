import React from 'react'
import "./SearchResult.css"

const SearchResult = ({result}) => {
  return (
    <div className="search-result" onClick={(e)=> console.log('hi   ')}>{result.name}</div>
  )
}

export default SearchResult