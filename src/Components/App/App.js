import React from 'react';
import './App.css';

import SearchBar from '../SearchBar';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>play<span className="highlight">list</span>.</h1>
        <div className="App">
          {<SearchBar/>}
          <div className="App-playlist">
            {/* Add a SearchResults component */}
            <Playlist/>
            {/* Add a Playlist component */}
          </div>
        </div>
      </div>
    );
  }
}


export default App;
