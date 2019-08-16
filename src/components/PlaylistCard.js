import React from 'react';
import '../App.css';
import Song from '../components/Song'


class PlaylistCard extends React.Component {

    render() {
      console.log(this.props)
        return (
            <div >
                <h3>{this.props.playlist.name}</h3>
                <Song/>
            </div>

        );
    }

}

export default PlaylistCard;
