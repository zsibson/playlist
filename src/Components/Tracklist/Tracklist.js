import React from 'react';
import './Tracklist.css'; 

import Track from '../Track/Track';

class Tracklist extends React.Component {
    render() {
      const tracks = this.props.tracks || [];
      return (
        <div className="TrackList">
          {
          tracks.map((track) => {
            console.log(track);
            return (
              <Track
                track={track}
                key={track.id}
                onAdd={this.props.onAdd}
                // isRemoval={this.props.isRemoval}
                // onRemove={this.props.onRemove}
              />
            );
          })}
        </div>
      );
    }
  }

export default Tracklist;