import React from 'react';
import './Playlist.css';

class Playlist extends React.Component {
    render(){
        return(
            <div className="Playlist">
                <input defaultValue={'new playlist'}/>
                {/* <!-- Add a TrackList component --> */}
                <button class="Playlist-save">save to spotify 🎉</button>
            </div>
        )
    }
}

export default Playlist;