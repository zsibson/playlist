import React from 'react';
import './Track.css';
import {Trash, AddCircle } from 'iconoir-react';


function Track({track, isRemoval, onAdd, onRemove}) {
    const handleAddTrack = () => {
        onAdd(track);
    };

    function handleRemoveTrack() {
        onRemove(track);
    }

   function renderAction() {
        if (isRemoval) {
            return <Trash className='Track-action' onClick={handleRemoveTrack} />;
        } else {
            return <AddCircle className='Track-action' onClick={handleAddTrack} />;
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
    
    
    
    
    
    
    


