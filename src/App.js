import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import API_KEY from './vis-components/API'
import SearchBar from './vis-components/search_bar';
import VideoList from './vis-components/video_list';
import VideoDetail from './vis-components/video_detail';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {

      videos : [],
      selectedVideo : null
    };
    this.videoSearch("MS Build 2018");
  }

videoSearch(term){
  YTSearch({key: API_KEY, term: term}, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    });
    // This statement is same as this.setState({videos : videos}) if key and value have same name u can use similar syntax
  });
}

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 600);
    return (
      <div>
      <SearchBar onSearchTermChange = {videoSearch} />
      <VideoDetail video= {this.state.selectedVideo} />
      <VideoList
       onVideoSelect = { selectedVideo => this.setState({selectedVideo}) }
       videos = {this.state.videos} /> {/* VideoList Needs a ref from parent component to child component */ }
      </div>
    );
  }
}

export default App;
