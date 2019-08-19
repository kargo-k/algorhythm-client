import React from 'react';
import '../App.css';

class Sliders extends React.Component {
  constructor() {
    super()
      this.state = {
        valence: null,
        energy: null,
        tempo: null,
        danceablity: null
      }
  }
  //
    customizationButton = (ev) => {
      if (ev.target.value === 'workout') {
        this.setState({
          valence: .67,
          energy: .67,
          tempo: .67,
          danceablity: .67
        })
      } else if (ev.target.value === 'study'){
        this.setState({
          valence: .67,
          energy: .50,
          tempo: .33,
          danceablity: .33
        })
      } else if (ev.target.value === 'karaoke'){
        this.setState({
          valence: .50,
          energy: .67,
          tempo: .50,
          danceablity: .88
        })
      } else if (ev.target.value === 'road-trip'){
        this.setState({
          valence: .99,
          energy: .99,
          tempo: .50,
          danceablity: .67
        })
      }
    }

    handleSliderChange = (ev) => {
      if (ev.target.id === 'valence') {
        this.setState({
          valence: ev.target.value
        })
      } else if (ev.target.id === 'energy') {
        this.setState({
          energy: ev.target.value
        })
    } else if (ev.target.id === 'tempo') {
      this.setState({
        tempo: ev.target.value
      })
    } else if (ev.target.id === 'danceability') {
        this.setState({
          danceability: ev.target.value
        })
    }
  }


    render() {
        return (
            <div>

                  <button value='workout' onClick={(ev)=>this.customizationButton(ev)}>Make a Workout Playlist</button>
                  <button value='study' onClick={(ev)=>this.customizationButton(ev)}>Make a Study Playlist</button>
                  <button value='karaoke' onClick={(ev)=>this.customizationButton(ev)}>Make a Karaoke Playlist</button>
                  <button value='road-trip' onClick={(ev)=>this.customizationButton(ev)}>Make a Road Trip Playlist</button>


              <div className='customize-playlist'>
                      <p>  Customize how you search for your songs </p>

                  <div className="slidecontainer">
                    <div>
                      <input onChange={(ev)=> {this.handleSliderChange(ev)}} type="range" id="valence" className="slider" value={this.state.valence} min="0" max="1" step=".01"/>
                      <label for="valence">Valence </label>
                    </div>
                    <div>
                      <input onChange={(ev)=> {this.handleSliderChange(ev)}} type="range" id="energy" className="slider" value={this.state.energy} min="0" max="1" step=".01"/>
                      <label for="energy">Energy </label>
                    </div>
                    <div>
                      <input onChange={(ev)=> {this.handleSliderChange(ev)}} type="range" id="tempo" className="slider" value={this.state.tempo} min="0" max="1" step=".01"/>
                      <label for="tempo">Tempo </label>
                    </div>
                    <div>
                      <input onChange={(ev)=> {this.handleSliderChange(ev)}} type="range" id="danceability" className="slider" value={this.state.danceability} min="0" max="1" step=".01"/>
                      <label for="danceability">Danceability </label>
                    </div>
                  </div>

                      <button onClick={this.handleCreatePlaylist}>Start making your playlist</button>
                      <button onClick={this.handleAutoMakePlaylist}>Do you trust me?</button>
              </div>

            </div>
        );
    }

}

export default Sliders;
