import React from 'react';
import './recommendedVideos.css';


function RecommendedVideos()  {
    return(
        <div className="card">
            <iframe id="recommendedVid1" type="text/html" width="200" height="200"
                src="https://www.youtube.com/embed/w7ejDZ8SWv8" frameborder="0" >
            </iframe>
            <iframe id="recommendedVid2" type="text/html" width="200" height="200"
                src="https://www.youtube.com/embed/BusChLgkLnA" frameborder="0">
            </iframe>
            <iframe id="recommendedVid3" type="text/html" width="200" height="200"
                src="https://www.youtube.com/embed/ir_OzWzbnC0" frameborder="0" >
            </iframe>


        </div>
    )}     


export default RecommendedVideos;


