import {useState, useCallback}  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Components
import Login from '../../Login'
import SearchBar from '../SeachBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';

function App() {
  const [playlistName, setPlaylistName] = useState('my playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
    
const addTrack = useCallback(track => {
  if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
    return;
  }
  setPlaylistTracks(prevPlaylistTracks => [...prevPlaylistTracks, track]);
},[playlistTracks]);

const removeTrack = (track) => {
  const updatePlaylistTracks = playlistTracks.filter(savedTrack => savedTrack.id !== track.id);
  setPlaylistTracks(updatePlaylistTracks);
};

const updatePlaylistName = (name) => {
  setPlaylistName(name);
};

const savePlaylist = () => {
  const trackURIs = playlistTracks.map(track => track.uri);
};

const search = (term) => {
  console.log(term);
};

    return (
      <div>
        <div>
          <Login />
        </div>
        {/* <h1>play<span className="highlight">list</span>.</h1>
        <div className="App">
        

          <SearchBar onSearch={search}
           />
          <div className="App-playlist">
            

            <SearchResults searchResults={searchResults}
                           onAdd={addTrack}
            />

            <Playlist playlistName={playlistName}
                      onNameChange={updatePlaylistName}
                      playlistTracks={playlistTracks} 
                      onRemove={removeTrack}
                      onSave={savePlaylist}
            />

          </div>
        </div> */}
      </div>
    );
}


export default App;
