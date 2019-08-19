import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import CreatePlaylists from '../containers/CreatePlaylists'
import SavedPlaylists from '../containers/SavedPlaylists'
import Sliders from '../components/Sliders'

const BACKEND_URL = 'http://localhost:8888'
const PLAYLISTS_URL ='http://localhost:8888/playlists'

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      allPlaylists: [],
      songs: [],
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
    .then(playlistSongData => this.displaySong(playlistSongData))

    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  displaySong = (playlistSongData) => {
    this.setState({
      songs: playlistSongData
    })
  }



  render() {
    return (

        <div className= 'playlists'>
          <div className='user-heading'>
            <h1>Welcome back, user</h1>
          </div>

          <div className='create-playlists'>
            <CreatePlaylists/>
          </div>

          <div className='saved-playlists'>
            <SavedPlaylists isClicked={this.state.isClicked} playlistSongs={this.state.songs} onPlaylistClick={this.onPlaylistClick} allPlaylists={this.state.allPlaylists}/>
          </div>
        <Sliders/>
        </div>


      );
    }
}

export default User;
