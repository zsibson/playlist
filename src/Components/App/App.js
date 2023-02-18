import React from 'react';
import './App.css';

import SearchBar from '../SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'new playlist',
      playlistTracks: [],
    }
  }
  
  render(){
    return (
      <div>
        <h1>play<span className="highlight">list</span>.</h1>
        <div className="App">
          {<SearchBar/>}
          <div className="App-playlist">
            {/* Add a SearchResults component */}
            
            {/* Add a Playlist component */}
          </div>
        </div>
      </div>
    );
  }
}


export default App;
