import React, {Component} from 'react';
import Video from './video';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: ["george , brady"]
        }
    }

    getVideos(){
        let response = this.state.videos;
        this.setState({
            videos: response.data
        })
    }

   displayVideos(){
       return this.state.videos.map(video =>
            <Video
                key={video.id}
                video={video} 
            />
        );
    }



   render() {
       return(
       <div>
           test
       </div>
       );
    }
}

export default App;