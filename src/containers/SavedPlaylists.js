import React from 'react';
import '../App.css';
import Song from '../components/Song'
import PlaylistCard from '../components/PlaylistCard'

const PLAYLISTS_URL = 'http://localhost:8888/playlists'

function SavedPlaylists(props) {

  if (props.allPlaylists == null) {
    return null
  } else {

    return (
      <div>
        <h1>Your Playlists</h1>
        {props.allPlaylists.map(playlist => {
          if (!playlist.name.includes('Library')) {
            return <PlaylistCard
              isClicked={props.isClicked}
              onPlaylistClick={props.onPlaylistClick}
              key={playlist.id}
              playlist={playlist}
              playlistSongs={props.playlistSongs}
            />
          }

        })}
      </div>
    )

  }
}

export default SavedPlaylists;