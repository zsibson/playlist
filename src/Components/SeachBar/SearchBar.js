import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
render() {
    return(
        <div className="SearchBar">
            <input placeholder="enter a song" />
            <button className="SearchButton">search</button>
        </div>
    );
}
}

export default SearchBar;