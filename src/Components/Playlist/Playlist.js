import React from 'react';
import './Playlist.css';

import Tracklist from '../Tracklist/Tracklist';

function Playlist({playlistTracks, onRemove}) {
        return(
            <div className="Playlist">
                <input defaultValue={'my playlist'}/>
                
                <Tracklist  tracks={playlistTracks}
                            onRemove={onRemove}
                            isRemoval
                />

                <button className="Playlist-save">save to spotify 🎉</button>
            </div>
        )
    }

export default Playlist;