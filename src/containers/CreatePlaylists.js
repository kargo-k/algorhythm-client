import React from 'react';
import '../App.css';
import Sliders from '../components/Sliders'
import Song from '../components/Song'
const PLAYLISTS_URL = 'https://algorhythm-nation.herokuapp.com/playlists'

class CreatePlaylists extends React.Component {


  render() {
    return (
      <div>
        {this.props.isClicked ? <h1> {this.props.current_playlist.name} </h1> : <h1>Customize a New Playlist</h1>}
        <div>
          {this.props.isClicked ?
            <table cellpadding="0" cellspacing="0" border="0">

              <tr>
                <th>Album</th>
                <th>Song</th>
                <th>Artist</th>
                <th>Song Length</th>
              </tr>

            </table>
            : null}
          {this.props.isClicked ? (
            this.props.playlistSongs.songs && this.props.playlistSongs.songs.map((song) => {
              return <Song isClicked={this.props.isClicked} song={song} />
            }))
            : <Sliders allSongs={this.props.allSongs} handleAddSong={this.props.handleAddSong} />}
        </div>

      </div>

    );
  }

}

export default CreatePlaylists;
