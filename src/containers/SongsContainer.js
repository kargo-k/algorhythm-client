import React from 'react';
import '../App.css';
import Song from '../components/Song'

class SongsContainer extends React.Component {

  render() {
    let current_playlist = this.props.current_playlist

    if (current_playlist !== null) {
      return (
        <div>
          <h3>{current_playlist.playlist.name}</h3>
          <ol>
            {current_playlist.songs.map(song => <li><Song key={song.id} song={song} /></li>)}
          </ol>
        </div>
      )
    } else {
      return null
    }
  }
}

export default SongsContainer
