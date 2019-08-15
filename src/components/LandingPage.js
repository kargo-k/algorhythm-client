import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom'
import '../App.css';

class LandingPage extends React.Component {

    render() {
        return (
            <div >
                <h1>Algorhythm Nation</h1>
                <p>Where you can generate playlists to suit your needs using our algo...rhythms.  Get it?</p>

                <button onClick={this.loginSpotify}>Login via Spotify</button>

                <a href="http://localhost:8888/login">link to login</a>
            </div>
        );
    }

    loginSpotify = () => {
        console.log('logging in')
    }
}

export default LandingPage;
