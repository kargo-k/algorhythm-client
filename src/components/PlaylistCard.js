import React from 'react';
import '../App.css';

class PlaylistCard extends React.Component {

    render() {

        return (
            <div>
                <div onClick={() => this.props.onPlaylistClick(this.props.playlist.id)}>
                    <h5 className='playlist-name'>{this.props.playlist.name}</h5>
                </div>
            </div>
        )
    }

}

export default PlaylistCard;
