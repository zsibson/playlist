import React from 'react';
import './Track.css';

function Track({track, isRemoval, onAdd, onRemove}) {
    const handleAddTrack = () => {
        onAdd(track);
    };

    const handleRemoveTrack = () => {
        onRemove(track);
    };

   const renderAction = () => {
        if (isRemoval) {
            return <button className='Track-action' onClick={handleRemoveTrack}>delete</button>
        } else {
            return <button className='Track-action' onClick={handleAddTrack}>add</button>
        }
    }
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3> {track.name} </h3>
                    <p> {track.artist} | {track.album} </p>
                </div>
                {renderAction()}
            </div>
        )
    }


export default Track;
    
    
    
    
    
    
    


