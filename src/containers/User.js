import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import CreatePlaylists from '../containers/CreatePlaylists'
import SavedPlaylists from '../containers/SavedPlaylists'
import SongsContainer from '../containers/SongsContainer'
import Sliders from '../components/Sliders'

const BACKEND_URL = 'http://localhost:8888'
const PLAYLISTS_URL = 'http://localhost:8888/playlists'
const SONGS_URL = 'http://localhost:8888/songs'

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      allPlaylists: null,
      songs: [],
      playlistSongs: [],
      isClicked: false,
      current_user: {}
    }
  };

  componentDidMount() {
    // saving the user's access token to local storage
    let token = this.props.location.search.substr(7)
    localStorage.setItem('token', token)

    fetch(`${BACKEND_URL}/users?token=${token}`)
      .then(resp => resp.json())
      .then(user_data => this.setState({ current_user: user_data }))

    fetch(`${PLAYLISTS_URL}?token=${token}`)
      .then(resp => resp.json())
      .then(playlistData => console.log('this is the playlist fetch response', playlistData))
      .then(playlistData => this.setState({ allPlaylists: playlistData }))
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

  handleLogout = () => {
    localStorage.clear()
    window.open('http://localhost:3000', "_parent")
  }

  render() {
    return (
      <Router>
        <Navbar handleLogout={this.handleLogout} />
        <div className='playlists'>
          <div className='user-heading'>
            <h1>{this.state.current_user.username}</h1>
          </div>

          <div className='create-playlists'>
            <CreatePlaylists isClicked={this.state.isClicked} playlistSongs={this.state.playlistSongs} />
          </div>

          <div className='saved-playlists'>
            <SavedPlaylists isClicked={this.state.isClicked} playlistSongs={this.state.playlistSongs} onPlaylistClick={this.onPlaylistClick} allPlaylists={this.state.allPlaylists} />
          </div>

        </div>
      </Router>
    )
  }

}

export default User;
