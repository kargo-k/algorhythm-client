import React from 'react';
import '../App.css';

class Song extends React.Component {

    render() {

        return (
<<<<<<< HEAD
            <div >
                <h4>song name here</h4>
            </div>
=======
          <div className='song-name'>

                  {
                    (this.props.song && this.props.song.name)
                  }

          </div>


>>>>>>> master
        );
    }

}

export default Song;
