import React from 'react';
import '../App.css';

const BACKEND_URL = 'http://localhost:8888/users/1'

class User extends React.Component {

    constructor() {
        super()
    }

    componentDidMount() {
        // FIXME: un-hard code user 1
        fetch(BACKEND_URL)
            .then(resp => resp.json())
            .then(console.log())
    }

    render() {
        return (
            <div >
                <h1>this be a User</h1>
            </div>
        );
    }

}

export default User;
