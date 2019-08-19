import React from 'react';
import '../App.css';

class Sliders extends React.Component {

    render() {
        return (
            <div >

                <div>
                    <p>  Customize how you search for your songs </p>
                    <button onClick={this.handleCreatePlaylist}>Start making your playlist</button>
                    <button onClick={this.handleAutoMakePlaylist}>Do you trust me?</button>

                </div>
            </div>
        );
    }

}

export default Sliders;
