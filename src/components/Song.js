import React from 'react';
import '../App.css';

class Song extends React.Component {
  constructor() {
    super()
    this.state = {
      isAddClicked: false
    }

  }
  handleAddClick = () => {
    console.log('clicked')
    this.setState ({
      isAddClicked: !this.state.isAddClicked
    })
  }


    render() {

        return (
              <div className="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                  <tbody>
                    <tr>
                        <td>{(this.props.song && <img src={this.props.song.img}/>)}</td>
                        <td>{(this.props.song && this.props.song.name)}</td>
                        <td>{(this.props.song && this.props.song.artist)}</td>
                        <td>{(this.props.song && this.props.song.duration_ms)}</td>
                        <td><button className='add-btn' onClick={this.handleAddClick}> {this.state.isAddClicked ? '-' : '+'} </button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
        );
    }

}

export default Song;
