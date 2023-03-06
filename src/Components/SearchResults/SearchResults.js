import React from 'react';
import './SearchResults.css';

// Components
import Tracklist from '../Tracklist/Tracklist';

function SearchResults({searchResults, onAdd}) {
        return(
            <div className="SearchResults">
                <h2>results</h2>

            {/* Tracklist Component Below */}
            <Tracklist  tracks={searchResults}
                        onAdd={onAdd}
                        isRemoval={false}
            />
            </div>
        );
    }

export default SearchResults;