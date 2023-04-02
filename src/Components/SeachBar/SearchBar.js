import React, {useState} from 'react';
import './SearchBar.css';

function SearchBar(props) {
    const [term, setTerm] = useState('');

    const handleTermChange = (e) => {
        setTerm(e.target.value);
    };

    const handleSearch = () => {
        props.onSearch(term);
    };

    return(
        <div className="SearchBar">
            <input placeholder="enter a song" onChange={handleTermChange} />
            <button className="SearchButton" onClick={handleSearch}>search</button>
        </div>
    );
};

export default SearchBar;