import React from 'react';
import './video.css';



const Video = (props) => {
    console.log(props.video)
    console.log("videoId", props.videoId);
    let url = `https://www.youtube.com/embed/${props.videoId}`;
    console.log("url", url);
    return(
        
        <iframe width="640" height="360"
<<<<<<< HEAD
            src={`https://www.youtube.com/embed/${props.video}`}
            frameborder="0">
        </iframe>
=======
            src={url}
            frameBorder="0">
>>>>>>> a3cd82141644977be707777470dfa45a91da162a

        </iframe>
    );
}

export default Video;