import React from 'react';
import '../App.css';
import Sliders from '../components/Sliders'
import Song from '../components/Song'
const PLAYLISTS_URL = 'http://localhost:8888/playlists'

class CreatePlaylists extends React.Component {


  constructor() {
    super()
    this.state = { addSongs: [] }
  }

  handleAddSong = uri => {
    if (this.state.addSongs.includes(uri)) {
      let newSongs = this.state.addSongs.filter(deleteUri => uri !== deleteUri)
      this.setState({ addSongs: newSongs })
    } else {
      this.setState({ addSongs: [...this.state.addSongs, uri] })
    }
  }

  postPlaylist = ev => {
    ev.preventDefault()
    console.log(ev.target.playlistname.value)
    fetch(PLAYLISTS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        token: localStorage.getItem('token'),
        playlistname: ev.target.playlistname.value,
        uris: this.state.addSongs
      })
    })
  }

  render() {
    return (
      <div className='create-playlist'>
        {this.props.isClicked ? <h1> Viewing your current playlist </h1> : <h1>Create Your Playlist</h1>}
        <div className='Content'>
          {this.props.isClicked ? <div className="tbl-header">
            <table cellpadding="0" cellspacing="0" border="0">
              <thead>
                <tr>
                  <th>   </th>
                  <th>Song</th>
                  <th>Artist</th>
                  <th>Song Length</th>
                </tr>
              </thead>
            </table>
          </div> : null}
          {this.props.isClicked ? (
            this.props.playlistSongs.songs && this.props.playlistSongs.songs.map((song) => {
              return <Song isClicked={this.props.isClicked} song={song} />
            }))
            : <Sliders allSongs={this.props.allSongs} handleAddSong={this.handleAddSong} />}
        </div>
        {!this.props.isClicked ?
          <div>
            <form name='new-playlist-form' onSubmit={this.postPlaylist}>
              <input name='playlistname' type='text' placeholder='Awesome Playlist Name'></input>
              <button type='submit' className='save-button'>Save my Playlist</button>
            </form>
          </div> : null}
      </div>

    );
  }

}

export default CreatePlaylists;
