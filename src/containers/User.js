import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import CreatePlaylists from '../containers/CreatePlaylists'
import SavedPlaylists from '../containers/SavedPlaylists'
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

  onPlaylistClick = (playlist) => {
    let token = localStorage.getItem('token')
    fetch(`${PLAYLISTS_URL}/${playlist.id}?token=${token}`)
      .then(resp => resp.json())
      .then(playlistSongData => this.setState({ playlistSongs: playlistSongData, current_playlist: playlist }))

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
        <div className='grid-container'>

          <div className='right-container'>
            <CreatePlaylists allSongs={this.state.songs} isClicked={this.state.isClicked} playlistSongs={this.state.playlistSongs} current_playlist={this.state.current_playlist} />
          </div>

          <div className='left-container'>
            <SavedPlaylists isClicked={this.state.isClicked} playlistSongs={this.state.playlistSongs} onPlaylistClick={this.onPlaylistClick} allPlaylists={this.state.allPlaylists} current_playlist={this.state.current_playlist} />
          </div>

        </div>
      </Router>
    )
  }

}

export default User;
