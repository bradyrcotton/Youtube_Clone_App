import React from 'react';
import './video.css';



const Video = (props) => {
    console.log(props)
    return(
        
        <iframe width="640" height="360"
  src={`https://www.youtube.com/embed/${props.video}`}
  frameborder="0"></iframe>

        // <tbody>
        //     <tr>
        //         <td>{props.video.videoId}</td>
        //     </tr>
        // </tbody>
    );
}

export default Video;