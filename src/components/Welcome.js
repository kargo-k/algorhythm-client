import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom'
import '../App.css';

class Welcome extends React.Component {

    render() {
        return (
            <div >
                <h1>Algorhythm Nation</h1>
                <p>Where you can generate playlists to suit your needs using our algo...rhythms.  Get it?</p>

                <a href="http://localhost:8888/login">link</a>

                <button onClick={() => window.open('http://localhost:8888/login')}>Login via Spotify</button>

                <button onClick={() => localStorage.clear()}>Logout</button>
            </div >
        );
    }
}

export default Welcome;
