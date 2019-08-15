import React from 'react';
import '../App.css';

class Navbar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div >
                Navbar... Username: {this.props.user}
            </div>
        );
    }
}

export default Navbar;
