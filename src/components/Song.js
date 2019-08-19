import React from 'react';
import '../App.css';

class Song extends React.Component {

    render() {
        return (
            <div className = 'Song-name'>
              <ul>
                {
                  (this.props.song && this.props.song.name)
                }
              </ul>
            </div>


        );
    }

}

export default Song;
