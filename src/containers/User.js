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
    super()
    this.state = {
      allPlaylists: [],
      songs: [],
      users: []
    }
  };

  componentDidMount() {
    // FIXME: un-hard code user 1
    fetch(PLAYLISTS_URL)
    .then(resp => resp.json())
    .then(playlistData => this.renderPlaylists(playlistData))
  }

  renderPlaylists = (playlistData) => {
    this.setState ({
      allPlaylists: playlistData
    })

  }

  render() {
    return (
      <Router>
      <div>
        <div>
          <h1>this be a User</h1>
        </div>

        <div style={{
          width: '50%',
          float: 'right',
          border: '5px dashed red',
          }}>
            <CreatePlaylists/>
        </div>

        <div style={{
          width: '30%',
          float: 'left',
          border: '5px dashed pink'}}>
            <SavedPlaylists allPlaylists={this.state.allPlaylists}/>
        </div>

        <Sliders/>
      </div>
      </Router>

    );
  }

}

export default User;
