import React, {Component} from 'react';
import SearchBar from './SearchBar/searchBar';
import Video from './Video/video';
import RecommendedVideos from './RecommendedVideos/recommendedVideos';
import SearchResults from '../Components/SearchResults/searchResults';
import axios from 'axios'


class App extends Component {
    state = {
        userinput: '',
        videos: [],
        video: {}
    }


componentDidMount(){
    console.log("component did mount");

}

async searchQuery(video){
    console.log(video)
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q='${video}'&key=AIzaSyBwIiD2pkn5uOiRp8ZH3XfaLJ0qQdwyy6Q`);
    this.setState({
        videos: response.data
    })
    
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
            <SearchBar searchQuery={this.searchQuery.bind(this)}/>
            <Video mapVideos={() => this.mapVideos()}/>
            <RecommendedVideos />
            <SearchResults mapVideos={() => this.mapVideos()}/>

        </div>
    );
}
}


export default App;