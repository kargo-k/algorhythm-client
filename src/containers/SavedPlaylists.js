import React from 'react';
import '../App.css';
import Song from '../components/Song'
import PlaylistCard from '../components/PlaylistCard'


class SavedPlaylists extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>this be a list of saved Playlists</h1>
        {
          this.props.allPlaylists.map(playlist => {
            return <PlaylistCard
              key={playlist.id}
              playlist={playlist}
              handleShowPlaylist={this.props.handleShowPlaylist}
            />
          })
        }
      </div>
    );
  }
}

export default SavedPlaylists;
