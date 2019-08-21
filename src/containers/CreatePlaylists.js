import React from 'react';
import '../App.css';
import Sliders from '../components/Sliders'
import Song from '../components/Song'

class CreatePlaylists extends React.Component {




  render() {
    return (
      <div className='create-playlist'>
        {this.props.isClicked ? <h1> Viewing your current playlist </h1> : <h1>Create Your Playlist</h1>}
        <div className='Content'>
          {this.props.isClicked ?   <div className="tbl-header">
              <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                  <tr>
                    <th>   </th>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Song Length</th>
                  </tr>
                </thead>
              </table>
            </div> : null}
          {this.props.isClicked ? (
            this.props.playlistSongs.songs && this.props.playlistSongs.songs.map((song) => {
              return <Song isClicked={this.props.isClicked} song={song} />
            }))
            : <Sliders allSongs={this.props.allSongs}/>}
          </div>
        </div>

      );
    }

  }

  export default CreatePlaylists;
