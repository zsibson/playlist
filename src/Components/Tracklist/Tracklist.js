import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css'; 

class Tracklist extends React.Component {
    render() {
      const tracks = this.props.tracks || [];

      return (
        <div className="TrackList">
          {tracks.map(track => {
            return (
              <Track
                track={track}
                key={track.id}
                onAdd={this.props.onAdd}
                isRemoval={this.props.isRemoval}
                onRemove={this.props.onRemove}
              />
            );
          })}
        </div>
      );
    }
  }

export default Tracklist;