import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import API_KEY from './vis-components/API'
import SearchBar from './vis-components/search_bar';
import VideoList from './vis-components/video_list';

class App extends Component {
  constructor(props){
  super(props);

  this.state = { videos : []};
  YTSearch({
    key: API_KEY,
    term: 'Latest Telugu Songs 2018'
}, (videos) => {
    
    this.setState({videos}); // This statement is same as this.setState({videos : videos}) if key and value have same name u can use similar syntax
});
  
  }
  
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos = {this.state.videos} /> {/* VideoList Needs a ref from parent component to child component */ }
        </div>
    );
  }
}

export default App;
