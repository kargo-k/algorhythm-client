import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom'
import '../App.css';
import Navbar from './Navbar';

class Welcome extends React.Component {

    render() {
        return (
            <div className="bg">
                <h1>Algorhythm Nation</h1>
                <p>Where you can generate playlists to suit your needs using our algo...rhythms.  Get it?</p>

                <button onClick={() => window.open('http://localhost:8888/login', "_parent")}> Login via Spotify </button>

            </div >
        );
    }
}

export default Welcome;
