import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Song from './components/Song';
import queryString from 'query-string'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { serverData: {} }
  }

  componentDidMount() {
    console.log(window.location)
    let parsed = queryString.parse(window.location.search)
    console.log(parsed)
  }

  render() {
    return (
      <Router>
        <div className="App" >
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/test' component={Song} />
        </div>
      </Router>
    );
  }
}

export default App;