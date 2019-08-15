import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { user: 'Sign Up' }
  }



  render() {
    return (
      <div className="App" >
        <LandingPage />
      </div>
    );
  }
}

export default App;