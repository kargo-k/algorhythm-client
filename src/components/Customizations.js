import React from 'react';
import '../App.css';

class Customizations extends React.Component {

    render() {
      
        return (
            <div className='customization-container'>

              {
                  (this.props.song && this.props.song.name)
              }

            </div>
        );
    }

}

export default Customizations;
