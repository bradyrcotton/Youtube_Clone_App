import React from 'react';
import './video.css';

const Video = (props) => {
    return(
        
        <iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/ZZ5LpwO-An4"
  frameborder="0"></iframe>

        // <tbody>
        //     <tr>
        //         <td>{props.video.videoId}</td>
        //     </tr>
        // </tbody>
    );
}

export default Video;