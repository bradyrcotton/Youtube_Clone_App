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
            <SearchBar searchQuery={() => this.searchQuery()}/>
            <Video />
            <RecommendedVideos />

        </div>
    );
}
}

export default App;