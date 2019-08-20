import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Navbar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div >
        This is the Navbar
        <button onClick={this.props.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Navbar;
