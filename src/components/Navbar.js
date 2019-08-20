import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Navbar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="navbar">
        <button id="logoutBtn" onClick={this.props.handleLogout}>Logout</button>
        <h2>{this.props.username}</h2>
        <span className='AN'>Algorhythm Nation</span>
      </div>
    );
  }
}

export default Navbar;
