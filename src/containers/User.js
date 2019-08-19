import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import CreatePlaylists from '../containers/CreatePlaylists'
import SavedPlaylists from '../containers/SavedPlaylists'
import Sliders from '../components/Sliders'

const BACKEND_URL = 'http://localhost:8888'
const PLAYLISTS_URL ='http://localhost:8888/playlists'
const SONGS_URL = 'http://localhost:8888/songs'

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      allPlaylists: [],
      playlistSongs: [],
      isClicked: false
    }
  };

  componentDidMount = (playlist) => {
    // FIXME: un-hard code user 1
    fetch(PLAYLISTS_URL)
    .then(resp => resp.json())
    .then(playlistData => this.renderPlaylists(playlistData))
  }

  renderPlaylists = (playlistData) => {
    this.setState({
      allPlaylists: playlistData,
    });
  }

  onPlaylistClick = (id) => {
    console.log('thisissenttoonplaylistclick', id)
    fetch(`${PLAYLISTS_URL}/${id}`)
    .then(resp => resp.json())
    .then(playlistSongData => this.displayPlaylistSongs(playlistSongData))

    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  displayPlaylistSongs = (playlistSongData) => {
    this.setState({
      playlistSongs: playlistSongData
    })
  }



  render() {
    return (

        <div className= 'playlists'>
          <div className='user-heading'>
            <h1>Welcome back, user</h1>
          </div>

          <div className='create-playlists'>
            <CreatePlaylists isClicked={this.state.isClicked} playlistSongs={this.state.playlistSongs}/>
          </div>

          <div className='saved-playlists'>
            <SavedPlaylists isClicked={this.state.isClicked} playlistSongs={this.state.playlistSongs} onPlaylistClick={this.onPlaylistClick} allPlaylists={this.state.allPlaylists}/>
          </div>
        </div>


      );
    }
}

export default User;
