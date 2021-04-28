import React, {Component} from 'react';
import SearchBar from './SearchBar/searchBar';
import Video from './Video/video';
import RecommendedVideos from './RecommendedVideos/recommendedVideos';
import { assertExpressionStatement } from '@babel/types';

class App extends Component {
    state = {
        video: []
    }


componentDidMount(){
    console.log("component did mount)");

}
async searchQuery(search){
    console.log(search)
    await assertExpressionStatement.get('https://www.googleapis.com/youtube/v3/search?q={'+search+'}&key={AIzaSyBwIiD2pkn5uOiRp8ZH3XfaLJ0qQdwyy6Q}')
}



<<<<<<< HEAD

// mapVideos(){
//     return this.state.videos.map(video =>
//         <Video
//             key={video.id}
//             video={video}
//             />
//         )
// }
=======
mapVideos(){
    return this.state.videos.map(video =>
        <Video
            key={video.id}
            video={video}
            />
        )
}
>>>>>>> 2a4a82ef373e4db524557463cbc00502d9ee933c

render(){

    return(
        <div className="container=fluid">
<<<<<<< HEAD
            <SearchBar searchQuery={() => this.searchQuery()}/>
=======
            <SearchBar mapVideos={() => this.mapVideos()}/>
>>>>>>> 2a4a82ef373e4db524557463cbc00502d9ee933c
            <Video />
            <RecommendedVideos />

        </div>
    );
}
}

export default App;