import React from 'react';
import '../App.css';
import Song from '../components/Song'


class CurrentPlaylist extends React.Component {

    render() {
        return (
            <div >
                <h1>this be a current playlist</h1>
                <Song/>
            </div>

        );
    }

}

export default CurrentPlaylist;
