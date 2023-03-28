import { useState, useCallback } from "react";
import './App.css';

// Import Components
import SearchBar from '../Components/SeachBar/SearchBar';
import Playlist from './Playlist/Playlist';
import SearchResults from './SearchResults/SearchResults';
import useAuthCode from "../useAuthCode";

function PlaylistHome({ code }) {
  const accessToken = useAuthCode(code);

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
        <div> {code} </div>
        <h1>play<span className="highlight">list</span>.</h1>
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
        </div>
      </div>
    );
}


export default PlaylistHome;




























