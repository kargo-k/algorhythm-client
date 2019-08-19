import React from 'react';
import '../App.css';

class Song extends React.Component {

    render() {
        return (
          <div className='song-name'>

                  {
                    (this.props.song && this.props.song.name)
                  }

          </div>


        );
    }

}

export default Song;
