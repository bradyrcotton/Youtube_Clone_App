import React from 'react';
import './searchBar.css'

<<<<<<< HEAD
const SearchBar = () => {
    return(
        <div className="searchbar">
            <input type="text" placeholder="Search" >
            </input>
             <button type="submit" >Submit </button>   
=======
function SearchBar(props)  {
    return(
        <div className="searchbar">
            <input type="text" placeholder="Search"> 
            </input>
            <button onClick={() => props.searchQuery()}>Search</button>
>>>>>>> 2a4a82ef373e4db524557463cbc00502d9ee933c
        </div>
    )}     


export default SearchBar;