import React from 'react';
import '../App.css';
import Song from '../components/Song'

class PlaylistCard extends React.Component {

    render() {
        return (
          <div>
            <div onClick = {() => this.props.onPlaylistClick(this.props.playlist.id)}>
                <h5 classname='playlist-name'>{this.props.playlist.name}</h5>
            </div>
          </div>
        )
    }

}

export default PlaylistCard;
