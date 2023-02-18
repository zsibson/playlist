import React from 'react';
import './Track.css';

class Track extends React.Component {
    renderAction() {
        if (this.props.isRemoval) {
            return <button className='Track-action' onClick={this.removeTrack}>Delete</button>
        } else {
            return <button className='Track-action' onClick={this.addTrack}>Add</button>
        }
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>Goodness of God</h3>
                    {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
                </div>
                {this.renderAction()}
            </div>
        )
    }
}




export default Track;
    
    
    
    
    
    
    


