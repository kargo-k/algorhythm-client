import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom'
import '../App.css';
import imgsrc from '../images/Spotify_Icon_RGB_White.png'

class Welcome extends React.Component {

  render() {
    return (
      <div className="bg">
        <div>
          <h1>Algorhythm Nation</h1>

                    <p>Where you can generate playlists to suit your needs using our (algo)rhythms.</p>
                </div>

                <div id="loginBtn">
                    <button onClick={() => window.open('https://algorhythm-nation.herokuapp.com/login', "_parent")}> <img id='spotifyicon' src={imgsrc}></img>LOGIN VIA SPOTIFY</button>
                </div>

            </div>
        );

    }
  }

  export default Welcome;
