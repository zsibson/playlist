import React from 'react';
import './Playlist.css';

import Tracklist from '../Tracklist/Tracklist';

class Playlist extends React.Component {
    render(){
        return(
            <div className="Playlist">
                <input defaultValue={'my playlist'}/>
                
                <Tracklist tracks={this.props.playlistTracks} />

                <button className="Playlist-save">save to spotify 🎉</button>
            </div>
        )
    }
}

export default Playlist;