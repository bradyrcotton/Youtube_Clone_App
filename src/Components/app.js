import React, {Component} from 'react';
import SearchBar from './searchBar';
import Video from './Video/video';
import RecommendedVideos from './recommendedVideos';

class App extends Component {
    state = {
        video: []
    }


componentDidMount(){
    console.log("componenet did mount)");

}

// mapVideos(){
//     return this.state.videos.map(video =>
//         <Video
//             key={video.id}
//             video={video}
//             />
//         )
// }
render(){

    return(
        <div className="container=fluid">
            <SearchBar />
            <Video />
            <RecommendedVideos />

        </div>
    );
}
}

export default App;