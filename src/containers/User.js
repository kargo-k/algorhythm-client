import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import CreatePlaylists from '../containers/CreatePlaylists'
import SavedPlaylists from '../containers/SavedPlaylists'
import Sliders from '../components/Sliders'



const BACKEND_URL = 'http://localhost:8888/users/1'

class User extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {
    // FIXME: un-hard code user 1
    fetch(BACKEND_URL)
    .then(resp => resp.json())
    .then(console.log())
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
            <SavedPlaylists/>
        </div>

        <Sliders/>

      <Route exact path='/createplaylists' component={CreatePlaylists} />

      </div>
      </Router>

    );
  }

}

export default User;
