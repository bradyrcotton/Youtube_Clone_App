import React, {Component} from 'react';
import SearchBar from './SearchBar/searchBar';
import Video from './Video/video';
import RecommendedVideos from './RecommendedVideos/recommendedVideos';
import axios from 'axios'


class App extends Component {
    state = {
        userinput: '',
        video: []
    }


componentDidMount(){
    console.log("component did mount");

}

async searchQuery(video){
    debugger;
    console.log(video)
    return await axios.get(`https://www.googleapis.com/youtube/v3/search?q='${video}'&key=AIzaSyBwIiD2pkn5uOiRp8ZH3XfaLJ0qQdwyy6Q`)
}




render(){

    return(
        <div className="container=fluid">
            <SearchBar searchQuery={this.searchQuery.bind(this)}/>
            <Video />
            <RecommendedVideos />

        </div>
    );
}
}

export default App;