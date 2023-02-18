import './SearchBar.css';

function SearchBar() {
    return(
        <div className="SearchBar">
            <input placeholder="enter a song" />
            <button className="SearchButton">search</button>
        </div>
    );
}

export default SearchBar;