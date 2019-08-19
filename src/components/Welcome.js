import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom'
import '../App.css';

class Welcome extends React.Component {

    render() {
        return (
            <div className="bg">
                <h1>Algorhythm Nation</h1>
                <p>Where you can generate playlists to suit your needs using our algo...rhythms.  Get it?</p>



                <a href="http://localhost:8888/login"><button onClick={this.loginSpotify}>Login via Spotify</button></a>
            </div>
        );
    }

    loginSpotify = () => {
    }
}

export default Welcome;
