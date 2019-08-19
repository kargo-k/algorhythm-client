import React from 'react';
import '../App.css';
import Sliders from '../components/Sliders'
import Song from '../components/Song'

class CreatePlaylists extends React.Component {

    render() {
      console.log(this.props.playlistSongs)
        return (
<<<<<<< HEAD
            <div style={{ padding: '20px' }} >
                <h1>Do you want to create a Playlist</h1>
                <button onClick={this.handleWorkout}>Make a Workout Playlist</button>
                <button onClick={this.handleStudy}>Make a Study Playlist</button>
                <button onClick={this.handleKaraoke}>Make a Karaoke Playlist</button>
                <button onClick={this.handleRoadTrip}>Make a Road Trip Playlist</button>
                <Song />
=======
          <div className='create-playlist'>
            <h1>{this.props.isClicked ? 'Viewing your current playlist' : 'Create Your Playlist'}</h1>
            <div className='Content'>
           {this.props.isClicked ? (
             this.props.playlistSongs.songs && this.props.playlistSongs.songs.map((song) => {
               return <Song isClicked={this.props.isClicked} song={song}/>
             }))
                : <Sliders/> }
>>>>>>> master
            </div>
         </div>

        );
    }

}

export default CreatePlaylists;
