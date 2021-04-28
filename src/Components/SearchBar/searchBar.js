import React from 'react';
import './searchBar.css'

function SearchBar(props)  {
    return(
        <div className="searchbar">
            <input type="text" placeholder="Search"> 
            </input>
            <button onClick={() => props.searchQuery()}>Search</button>
        </div>
    )}     


export default SearchBar;