import React, {Component} from 'react';

import Video from './Video/video'


class App extends Component {
    state = {
        video: []
    }


componentDidMount(){
    console.log("componenet did mount)");

}

// mapVideos(){
//     return this.state.videos.map(viideo =>
//         <Video
//             key={video.id}
//             video={video}
//             />
//         )
// }
render(){

    return(
        <div className="container=fluid">
            <Video />
        </div>
    );
}
}

export default App;