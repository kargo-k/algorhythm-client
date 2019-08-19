import React from 'react';
import '../App.css';

class Customizations extends React.Component {
  // constructor() {
  //   super()
  //     this.state = {
  //       workout: {},
  //       study: {},
  //       karaoke: {},
  //       roadTrip: {}
  //     }
  // }
  //
  //   handleWorkout = () => {
  //     // if (write conditionals for workout)
  //     this.setState({
  //       karaoke: []
  //     })
  //   }

    render() {
        return (
            <div>
              <div>
                <button onClick={this.handleWorkout}>Make a Workout Playlist</button>
                <button onClick={this.handleStudy}>Make a Study Playlist</button>
                <button onClick={this.handleKaraoke}>Make a Karaoke Playlist</button>
                <button onClick={this.handleRoadTrip}>Make a Road Trip Playlist</button>
              </div>

              <div className='customize-playlist'>
                <p>Customize how you search for your songs </p>
                <button onClick={this.handleCreatePlaylist}>Start making your playlist</button>
                <button onClick={this.handleAutoMakePlaylist}>Do you trust me?</button>

              </div>
            </div>
        );
    }

}

export default Customizations;
