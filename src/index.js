import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detial';
const API_KEY = ' AIzaSyC2aOiNLvRVXomsgp-T-olIIvnebLD_9QM ';



class App extends Component {
    constructor(props){
        super(props);

        // List of videos will be here
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('React tutorial');


    }

    videoSearch(term){
        // Youtube search api
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);


        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    vide={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('.container')
);