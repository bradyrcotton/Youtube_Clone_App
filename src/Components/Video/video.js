import React from 'react';
import './video.css';



const Video = (props) => {
    console.log(props.video)
    console.log("videoId", props.videoId);
    let url = `https://www.youtube.com/embed/${props.videoId}`;
    console.log("url", url);
    console.log('title', props.videoTitle);
    return(
        <div class ="card">    
        <iframe width="640" height="360" src={url} frameBorder="0"> </iframe>
        <h2>{props.videoTitle}</h2>
        <h6>{props.videoDescription}</h6>
        </div>
        
    );
}

export default Video;