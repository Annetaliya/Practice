import React, { useState } from 'react';
import './style.css'

const Search = ({search, setSearch, handleSearch}) => {
    
  return (
    <div className='search-engine'>
        <input
        type='text'
        name='search'
        placeholder='Enter City Name'
        className='city-search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
         />
         <button className='search-btn' onClick={handleSearch}>Search Weather</button>

    </div>
  )
}

export default Search