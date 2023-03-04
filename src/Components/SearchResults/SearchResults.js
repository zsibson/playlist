import React from 'react';
import './SearchResults.css';

// Components
import Tracklist from '../Tracklist/Tracklist';

class SearchResults extends React.Component {
    render(){
        return(
            <div className="SearchResults">
                <h2>results</h2>

            {/* Tracklist Component Below */}
            <Tracklist tracks={this.props.searchResults} />
            </div>
        );
    }
}

export default SearchResults;