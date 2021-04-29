import React from 'react';
import './recommendedVideos.css';


function RecommendedVideos(props)  {
    return(
        <div className="card">
            {props.mapVideos()}


        </div>
    )}     


export default RecommendedVideos;



