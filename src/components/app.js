import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            youtube_videos: []
        }
    }

    componentDidMount(){
        console.log('component did mount');
    }

    render(){
        console.log("this.state", this.state);
        return(
            <div>test</div>
        )
    }
}