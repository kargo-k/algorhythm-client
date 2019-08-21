import React from 'react';
import '../App.css';
import Customizations from '../components/Customizations';

class Sliders extends React.Component {
  constructor() {
    super()
    this.state = {
      valence: null,
      energy: null,
      tempo: null,
      danceability: null,
      isCreateClicked: false,
      filteredSongs: []

    }
  }
  //
  customizationButton = (ev) => {
    if (ev.target.value === 'workout') {
      this.setState({
        valence: .88,
        energy: .79,
        tempo: .80,
        danceability: .99
      })
    } else if (ev.target.value === 'study') {
      this.setState({
        valence: .61,
        energy: .49,
        tempo: .49,
        danceability: .40
      })
    } else if (ev.target.value === 'karaoke') {
      this.setState({
        valence: .50,
        energy: .66,
        tempo: .50,
        danceability: .69
      })
    } else if (ev.target.value === 'road-trip') {
      this.setState({
        valence: .51,
        energy: .68,
        tempo: .51,
        danceability: .52
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

  handleCreatePlaylist = () => {


    this.setState({
      isCreateClicked: !this.state.isCreateClicked,
      valence: this.state.valence,
      energy: this.state.energy,
      tempo: this.state.tempo,
      danceability: this.state.danceability
    }, () => {
      const valenceFilter = (this.state.valence >= .5) ? (this.props.allSongs.filter(song => song.valence > this.state.valence)) : (this.props.allSongs.filter(song => song.valence < this.state.valence))
      const energyFilter = (this.state.energy >= .5) ? (valenceFilter.filter(song => song.energy > this.state.energy)) : (valenceFilter.filter(song => song.energy < this.state.energy))
      const tempoFilter = (this.state.tempo >= .5) ? (energyFilter.filter(song => song.tempo > this.state.tempo)) : (energyFilter.filter(song => song.tempo < this.state.tempo))
      const danceabilityFilter = (this.state.danceability >= .5) ? (tempoFilter.filter(song => song.danceability > this.state.danceability)) : (tempoFilter.filter(song => song.danceability < this.state.danceability))
      this.setState({
        filteredSongs: danceabilityFilter
      })
      console.log('**arrayofsongs**', this.state.filteredSongs)
    })





  }


  render() {
    console.log('***doeshandleclickexist***', this.props)
    return (
      <div>

        <button value='workout' onClick={(ev) => this.customizationButton(ev)}>Make a Workout Playlist</button>
        <button value='study' onClick={(ev) => this.customizationButton(ev)}>Make a Study Playlist</button>
        <button value='karaoke' onClick={(ev) => this.customizationButton(ev)}>Make a Karaoke Playlist</button>
        <button value='road-trip' onClick={(ev) => this.customizationButton(ev)}>Make a Road Trip Playlist</button>


        <div className='customize-playlist'>
          <p style={{"text-align": 'center'}}>Customize how you search for your songs </p>

          <div className="slidecontainer">
            <div>
              <input onChange={(ev) => { this.handleSliderChange(ev) }} type="range" id="valence" className="slider" value={this.state.valence} min="0" max="1" step=".01" />
              <label for="valence">Valence </label>
            </div>
            <div>
              <input onChange={(ev) => { this.handleSliderChange(ev) }} type="range" id="energy" className="slider" value={this.state.energy} min="0" max="1" step=".01" />
              <label for="energy">Energy </label>
            </div>
            <div>
              <input onChange={(ev) => { this.handleSliderChange(ev) }} type="range" id="tempo" className="slider" value={this.state.tempo} min="0" max="1" step=".01" />
              <label for="tempo">Tempo </label>
            </div>
            <div>
              <input onChange={(ev) => { this.handleSliderChange(ev) }} type="range" id="danceability" className="slider" value={this.state.danceability} min="0" max="1" step=".01" />
              <label for="danceability">Danceability </label>
            </div>
          </div>
        </div>
        <button onClick={this.handleCreatePlaylist}> Start making your playlist</button>
        <button onClick={this.handleAutoMakePlaylist}> Do you trust me?</button>
        <div className = 'customization-container'>

          {this.state.isCreateClicked ?   <div className="tbl-header">
              <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                  <tr>
                    <th>   </th>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Song Length</th>
                    <th>Add Song</th>
                  </tr>
                </thead>
              </table>
            </div> : null}
          {this.state.isCreateClicked ? (this.state.filteredSongs && this.state.filteredSongs.map((song) => {
            return <Customizations handleAddClick={this.props.handleAddClick} song={song} />
          }))
          : null}
        </div>



      </div>
    );
  }

}

export default Sliders;

// () => this.props.onPlaylistClick(this.props.playlist.id)
//
// {this.props.isClicked ? (
//   this.props.playlistSongs.songs && this.props.playlistSongs.songs.map((song) => {
//     return <Song isClicked={this.props.isClicked} song={song} />
//   }))
//   : <Sliders allSongs={this.props.allSongs}/>}
