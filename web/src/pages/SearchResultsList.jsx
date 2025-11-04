import React from 'react'
import "./SearchResultsList.css"
import SearchResult from './SearchResult';

const SearchResultsList = ({results, onSelect}) => {
  return (
    <div className='results-list'>
        {
            results.map((result, id) =>{
                return <SearchResult result={result} key={id} onSelect={onSelect}   />;
            })
        }
    </div>
  )
}

export default SearchResultsList