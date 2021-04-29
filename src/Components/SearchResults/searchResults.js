import React from 'react';

const SearchResults = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                <th>Release Date</th>
                </tr>
            </thead>
            {props.mapVideos()}
        </table>
            
    );
}

export default SearchResults;