import { useState, useCallback, useEffect } from "react";
import './App.css';
import SpotifyWebApi from "spotify-web-api-node";
import SearchBar from '../Components/SeachBar/SearchBar';
import Playlist from './Playlist/Playlist';
import SearchResults from './SearchResults/SearchResults';
import useAuthCode from "../useAuthCode";

const spotifyWebApi = new SpotifyWebApi({
  clientId: '066f1f0b24c14a97aaf08e25ba339b9e',
});

function PlaylistHome({ code }) {
  
  const accessToken = useAuthCode(code);
  const [playlistName, setPlaylistName] = useState('my playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [playlistId, setplaylistId] = useState(null);

  useEffect(() => {
    if (!accessToken) return
    spotifyWebApi.setAccessToken(accessToken)
  }, [accessToken]);
    
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

const savePlaylist = async () => {
  if(!accessToken) return;
  try {
    const trackURIs = playlistTracks.map(track => track.uri);
    const userResponse = await spotifyWebApi.getMe();
    const userId = userResponse.body.id;

    const playlistResponse = await spotifyWebApi.createPlaylist(userId, {
      name: playlistName
    });
    const newPlaylistId = playlistResponse.body.id

    await spotifyWebApi.addTracksToPlaylist(newPlaylistId, trackURIs);

    setplaylistId(newPlaylistId);
    setPlaylistName('my playlist');
    setPlaylistTracks([]);
  } catch(err){
    console.log(err);
  }
};

const handleSearch = (term) => {
setSearchTerm(term);
};

useEffect(() => {
  const searchSpotify = async () => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    try {
      const response = await spotifyWebApi.searchTracks(searchTerm);
      setSearchResults(response.body.tracks.items);
    } catch (err) {
      console.error(err);
    }
  };

  searchSpotify();
}, [searchTerm]);



    return (
      <div>
        <h1>play<span className="highlight">list</span>.</h1>
        <div className="App">
        

          <SearchBar onSearch={handleSearch}
                     accessToken={accessToken}
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




























