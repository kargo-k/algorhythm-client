import React from 'react';
import '../App.css';
import Song from '../components/Song'


class PlaylistCard extends React.Component {

    render() {

        return (
            <div onClick={() => this.props.handleShowPlaylist(this.props.playlist.id)}>
                <h3>{this.props.playlist.name} - ({this.props.playlist.id})</h3>
            </div>

        );
    }

}

export default PlaylistCard;
