import React from 'react';
import '../App.css';
import PlaylistCard from '../components/PlaylistCard'

function SavedPlaylists(props) {

  if (props.allPlaylists != null) {

    return (
      <div>
        <h1 className='h1-current'>Your Playlists</h1>
        <div className='playlist-content'>
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
      </div>
    )


  } else {

    return <div><h1>No Saved Playlists! :(</h1></div>


  }
}

export default SavedPlaylists;
