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
      current_user: {},
      current_playlist: {}
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
      .then(playlistData => this.setState({ allPlaylists: playlistData }))

    fetch(`${SONGS_URL}?token=${token}`)
      .then(resp => resp.json())
      .then(songData => this.setState({ songs: songData }))
  }

  onPlaylistClick = (id) => {
    let token = localStorage.getItem('token')
    fetch(`${PLAYLISTS_URL}/${id}?token=${token}`)
      .then(resp => resp.json())
      .then(playlistSongData => this.setState({ playlistSongs: playlistSongData }))

    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  handleLogout = () => {
    localStorage.clear()
    window.open('http://localhost:3000', "_parent")
  }

  render() {
    return (
      <Router>
        <Navbar handleLogout={this.handleLogout} username={this.state.current_user.username} />
        <div className='playlists'>
          <div className='user-heading'>
          </div>

          <div className='create-playlists'>
            <CreatePlaylists allSongs={this.state.songs} isClicked={this.state.isClicked} playlistSongs={this.state.playlistSongs} />
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
