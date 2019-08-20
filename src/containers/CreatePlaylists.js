import React from 'react';
import '../App.css';
import Sliders from '../components/Sliders'
import Song from '../components/Song'

class CreatePlaylists extends React.Component {

  render() {
    return (
      <div className='create-playlist'>
        <h1>{this.props.isClicked ? 'Viewing your current playlist' : 'Create Your Playlist'}</h1>
        <div className='Content'>
          {this.props.isClicked ? (
            this.props.playlistSongs.songs && this.props.playlistSongs.songs.map((song) => {
              return <Song isClicked={this.props.isClicked} song={song} />
            }))
            : <Sliders />}
        </div>
      </div>

    );
  }

}

export default CreatePlaylists;
