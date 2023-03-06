import React from 'react';
import './Tracklist.css'; 

import Track from '../Track/Track';

function Tracklist(props) {
      const {tracks, onAdd, isRemoval, onRemove} = props;
      return (
        <div className="TrackList">
          {
          tracks.map((track) => {
            console.log(track);
            return (
              <Track
                track={track}
                key={track.id}
                onAdd={onAdd}
                isRemoval={isRemoval}
                onRemove={onRemove}
              />
            );
          })}
        </div>
      );
    }

export default Tracklist;