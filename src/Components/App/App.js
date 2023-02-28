import React  from 'react';
import './App.css';

// Import Components
import SearchBar from '../SeachBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'Goodness of God',
          artist: 'Bethel Music',
          album: 'Victory',
          id: Math.random(1000),
      },
      {
        name: 'Goodness of God',
        artist: 'Bethel Music',
        album: 'Victory',
        id: Math.random(1000),
    },
    {
      name: 'Goodness of God',
      artist: 'Bethel Music',
      album: 'Victory',
      id: Math.random(1000),
  },
      ],
      playlistName: 'new playlist',
      playlistTracks: [
        {
        name: 'Goodness of God',
        artist: 'Bethel Music',
        album: 'Victory',
        id: Math.random(1000),
    },
    {
      name: 'Goodness of God',
      artist: 'Bethel Music',
      album: 'Victory',
      id: Math.random(1000),
  },
  {
    name: 'Goodness of God',
    artist: 'Bethel Music',
    album: 'Victory',
    id: Math.random(1000),
},
  ],
    }
    console.log(this.state);
  }
  
  render(){
    return (
      <div>
        <h1>play<span className="highlight">list</span>.</h1>
        <div className="App">
          {<SearchBar />}
          <div className="App-playlist">

            {/* Search Result Component Below */}
            {<SearchResults searchResults={this.state.searchResults} />}

            {/* Add a Playlist component */}
            {<Playlist />}

          </div>
        </div>
      </div>
    );
  }
}


export default App;
