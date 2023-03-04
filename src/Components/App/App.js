import {useState}  from 'react';
import './App.css';


// Import Components
import SearchBar from '../SeachBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';

function App() {
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
      ]);

    return (
      <div>
        <h1>play<span className="highlight">list</span>.</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">

            <SearchResults searchResults={searchResults} />

            <Playlist />

          </div>
        </div>
      </div>
    );
}


export default App;
