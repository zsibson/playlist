import {useState, useCallback}  from 'react';
import './App.css';


// Import Components
import SearchBar from '../SeachBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';

function App() {
  const [playlistName, setPlaylistName] = useState('my playlist');
  const [playlistTracks, setPlaylistTracks] = useState(
    [
      {
        name: 'Know You Will',
        artist: 'Hillsong United',
        album: 'Know You Will',
        id: 4,
      },
      {
        name: 'Your Love Is Strong',
        artist: 'Cory Asbury',
        album: 'Reckless Love',
        id: 5,
      },
      {
        name: 'Abba',
        artist: 'John Mark Pantana',
        album: 'Love Secrets',
        id: 6,
      },
      {
        name: 'Here I am to Worship',
        artist: 'Shane and Shane',
        album: 'Worship Initiative',
        id: 7,
      },
    ]
  );
    const [searchResults, setSearchResults] = useState(
      [
        {
          name: 'Goodness of God',
          artist: 'Bethel Music',
          album: 'Victory',
          id: 1,
        },
        {
          name: 'Victory is Yours',
          artist: 'Bethel Music',
          album: 'Victory',
          id: 2,
        },
        {
          name: 'Raise a Hallelujah',
          artist: 'Bethel Music',
          album: 'Victory',
          id: 3,
        },
      ]
    );

const addTrack = useCallback(track => {
  if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
    return;
  }
  setPlaylistTracks(prevPlaylistTracks => [...prevPlaylistTracks, track]);
},[playlistTracks]);

    return (
      <div>
        <h1>play<span className="highlight">list</span>.</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">

            <SearchResults searchResults={searchResults} />

            <Playlist playlistName={playlistName}
                      playlistTracks={playlistTracks} 
                      />

          </div>
        </div>
      </div>
    );
}


export default App;
