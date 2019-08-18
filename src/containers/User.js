import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import CreatePlaylists from '../containers/CreatePlaylists'
import SavedPlaylists from '../containers/SavedPlaylists'
import Sliders from '../components/Sliders'

const BACKEND_URL = 'http://localhost:8888'
const PLAYLISTS_URL = 'http://localhost:8888/playlists'

class User extends React.Component {

  constructor() {
    super()
    this.state = {
      allPlaylists: [],
      songs: [],
      current_user: {},
    }
  };

  componentDidMount() {
    // saving the user's access token to local storage
    let token = this.props.location.search.substr(7)
    console.log('token', token)
    localStorage.setItem('token', token)

    fetch(`${BACKEND_URL}/users?token=${token}`)
      .then(resp => resp.json())
      .then(user_data => this.setState({ current_user: user_data }))

    fetch(`${PLAYLISTS_URL}?token=${token}`)
      .then(resp => resp.json())
      // .then(playlistData => console.log('this is the playlist fetch response', playlistData))
      .then(playlistData => this.renderPlaylists(playlistData))
  }

  // ? this can be done up in line 31 after getting the fetch response
  renderPlaylists = (playlistData) => {
    this.setState({
      allPlaylists: playlistData
    })
  }

  render() {
    return (
      <Router>
        <Navbar handleLogout={this.handleLogout} />
        <div>
          <div>
            <h1>{this.state.current_user.username}</h1>
          </div>

          <div style={{
            width: '50%',
            float: 'right',
            border: '5px dashed red',
          }}>
            <CreatePlaylists />
          </div>

          <div style={{
            width: '30%',
            float: 'left',
            border: '5px dashed pink'
          }}>
            <SavedPlaylists allPlaylists={this.state.allPlaylists} />
          </div>

          <Sliders />
        </div>
      </Router>

    );
  }

  handleLogout = () => {
    localStorage.clear()
    window.open('http://localhost:3000', "_parent")
  }

}

export default User;
