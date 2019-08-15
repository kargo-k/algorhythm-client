import React from 'react';
import '../App.css';

class LandingPage extends React.Component {

    render() {
        return (
            <div >
                <h1>Algorhythm Nation</h1>
                <p>Where you can generate playlists to suit your needs using our algo...rhythms.  Get it?</p>

                <button onClick={this.loginSpotify}>Login via Spotify</button>
            </div>
        );
    }

    loginSpotify = () => {
        const scopes = 'user-library-read playlist-read-collaborative playlist-modify-private playlist-modify-public playlist-read-private user-top-read'
    }
}

export default LandingPage;
