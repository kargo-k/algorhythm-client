import React from 'react';
import '../App.css';
import Song from '../components/Song'

class PlaylistCard extends React.Component {

// playlistSongs={this.props.playlistSongs}
    render() {
        return (
          <div>
            <div onClick = {() => this.props.onPlaylistClick(this.props.playlist.id)}>
                <h5 classname='playlist-name'>{this.props.playlist.name}</h5>
            </div>
            <div>
             {this.props.isClicked ? (
               this.props.playlistSongs.songs && this.props.playlistSongs.songs.map((song) => {
                 return <Song isClicked={this.props.isClicked} song={song}/>
               }))
                  : null}
           </div>

          </div>
        )
    }

}

export default PlaylistCard;

//
// </div>
// .map(song => {
//       return <Song
//       song={song}
//       />})
//       {for (var i = 0; i < this.props.playlistSongs.songs.length; i++) {
//
//         return <Song
//         song={this.props.playlistSongs[i]}
//         /> }
//       }
//     <div/>
