import React, {Component} from 'react';
import SearchBar from './SearchBar/searchBar';
import Video from './Video/video';
import RecommendedVideos from './RecommendedVideos/recommendedVideos';
import axios from 'axios';


class App extends Component {
    state = {
        video: [],
        searchValue: ''
    }


componentDidMount(){
    console.log("component did mount)");

}
async searchQuery(searchValue){
    console.log(searchValue)
    await axios.get('https://www.googleapis.com/youtube/v3/search?q='+searchValue+'&key=AIzaSyADHpjJZoumK0EJZLJ1eBEcitjYi8PKQTg')

}


mapVideos(){
    return this.state.videos.map(video =>
        <Video
            key={video.id}
            video={video}
            />
        )
}

render(){

    return(
        <div className="container=fluid">
            <SearchBar mapVideos={() => this.mapVideos()} searchQuery={() => this.searchQuery()}/>
            <Video />
            <RecommendedVideos />

        </div>
    );
}
}

export default App;