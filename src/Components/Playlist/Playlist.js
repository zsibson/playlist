import './Playlist.css';

function Playlist() {
    return(
        <div className="Playlist">
            <input defaultValue={'new playlist'}/>
            {/* <!-- Add a TrackList component --> */}
            <button class="Playlist-save">save to spotify 🎉</button>
        </div>
    )
}

export default Playlist;