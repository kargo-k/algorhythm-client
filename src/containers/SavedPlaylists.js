import React from 'react';
import '../App.css';
import PlaylistCard from '../components/PlaylistCard'

function SavedPlaylists(props) {

  if (props.allPlaylists == null) {
    return <div></div>
  } else {

    return (
      <div>
        <h1>Your Playlists</h1>
        {props.allPlaylists.map(playlist => {
          console.log('inside for each', playlist)
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