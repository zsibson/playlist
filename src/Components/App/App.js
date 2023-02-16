import './App.css';
import SearchBar from '../SearchBar';

function App() {
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


export default App;
