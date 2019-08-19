import React from 'react';
import '../App.css';
import Sliders from '../components/Sliders'
import Song from '../components/Song'

class SuggestedPlaylists extends React.Component {

    render() {
        return (
            <div style={{ padding: '20px' }} >
                <h1>Do you want to create a Playlist</h1>
                <button onClick={this.handleWorkout}>Make a Workout Playlist</button>
                <button onClick={this.handleStudy}>Make a Study Playlist</button>
                <button onClick={this.handleKaraoke}>Make a Karaoke Playlist</button>
                <button onClick={this.handleRoadTrip}>Make a Road Trip Playlist</button>
                <Song />
            </div>
        );
    }

}

export default SuggestedPlaylists;
