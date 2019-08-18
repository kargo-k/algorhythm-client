import React from 'react';
import '../App.css';
import { BrowserRouter as Route, Link } from 'react-router-dom'
import CurrentPlaylist from '../containers/CurrentPlaylist'


class Navbar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div >
          <Route exact path={'/'} component={LandingPage} />
          <Route path={'/playlist'} component={CurrentPlaylist} />
        </div>
      </Router>
    );
  }
}

export default Navbar;
