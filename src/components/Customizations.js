import React from 'react';
import '../App.css';

class Customizations extends React.Component {
  constructor() {
    super()
    this.state = {
      isAddClicked: false,
      addedSongs: []
    }

  }
  handleAddClick = () => {
    console.log('clicked', this.props.song.uri)
    this.setState({
      isAddClicked: !this.state.isAddClicked
    })
  }

  convertMins = (ms) => {
    let minutes = Math.floor(ms / 60000)
    let leftover = Math.floor(ms % 60000)
    let seconds = Math.floor(leftover / 1000)
    seconds = this.leftPad(seconds)
    return `${minutes}:${seconds}`
  }

  leftPad(number) {
    var output = number + '';
    while (output.length < 2) {
      output = '0' + output;
    }
    return output;
  }

  render() {


    return (
      <div className="tbl-content">
        <table cellpadding="0" cellspacing="0" border="0">
          <tbody>
            <tr>
              <td>{(this.props.song && <img src={this.props.song.img} />)}</td>
              <td>{(this.props.song && this.props.song.name)}</td>
              <td>{(this.props.song && this.props.song.artist)}</td>
              <td>{(this.props.song && this.convertMins(this.props.song.duration_ms))}</td>
              <td><button className='add-btn' onClick={() => {
                this.props.handleAddSong(this.props.song.uri)
                this.handleAddClick()
              }}> {this.state.isAddClicked ? '-' : '+'} </button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

}

export default Customizations;
