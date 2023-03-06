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
            <Tracklist  tracks={this.props.searchResults}
                        // onAdd={this.props.onAdd}
            />
            </div>
        );
    }
}

export default SearchResults;