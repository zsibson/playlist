import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist({playlistTracks, onRemove, onNameChange, onSave}) {

    const handleNameChange = (e) => {
        const newName = e.target.value;
        onNameChange(newName);
    }

        return(
            <div className="Playlist">
                <input  defaultValue={'my playlist'}
                        onChange={handleNameChange}
                />
                
                <Tracklist  tracks={playlistTracks}
                            onRemove={onRemove}
                            isRemoval
                />

                <button className="Playlist-save"
                        onClick={onSave}
                >
                    save to spotify 🎉
                </button>
            </div>
        )
    }

export default Playlist;