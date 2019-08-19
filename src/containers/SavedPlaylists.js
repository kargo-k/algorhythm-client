import React from 'react';
import '../App.css';
import Song from '../components/Song'
import PlaylistCard from '../components/PlaylistCard'

const PLAYLISTS_URL ='http://localhost:8888/playlists'

class SavedPlaylists extends React.Component {

<<<<<<< HEAD
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
=======



    render() {
        return (
            <div>
            <h1>Saved Playlists</h1>
          {
            this.props.allPlaylists.map(playlist => {
              if (!playlist.name.includes('Library')) {
              return <PlaylistCard
              isClicked={this.props.isClicked}
              onPlaylistClick={this.props.onPlaylistClick}
              key={playlist.id}
              playlist={playlist}
              playlistSongs={this.props.playlistSongs}
            />}
            })
          }
          </div>
        );
    }
>>>>>>> master
}

export default SavedPlaylists;
