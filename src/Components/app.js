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

async searchQuery(searchTerm){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q='${searchTerm}'&part=snippet&key=AIzaSyBwIiD2pkn5uOiRp8ZH3XfaLJ0qQdwyy6Q`);
    this.setState({
        videos: response.data.items
    })
    
}

mapVideos(){
    if(this.state.videos.length === 0){
        
        return (
            <Video
        key={'1234'}
        videoId={'nmHtNEClJlE'}
        />
        )
    }
    else{
        return this.state.videos.map(video =>
            <Video
            key={video.id.videoId}
            video={video}
            videoId={video.id.videoId}
            />
            
            )
    }
    
}



render(){
    return(
        <div className="container=fluid">
            <SearchBar searchQuery={this.searchQuery.bind(this)}/>
            <RecommendedVideos mapVideos={() => this.mapVideos()}/>
           

        </div>
    );
}
}


export default App;