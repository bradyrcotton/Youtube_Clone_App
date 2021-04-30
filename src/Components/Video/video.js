import React from 'react';
import './video.css';



const Video = (props) => {
    console.log(props.video)
    console.log("videoId", props.videoId);
    let url = `https://www.youtube.com/embed/${props.videoId}`;
    console.log("url", url);
    return(
        
        <iframe width="640" height="360"
            src={url}
            frameBorder="0">

        </iframe>
    );
}

export default Video;