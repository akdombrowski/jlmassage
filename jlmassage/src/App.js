import React, { Component } from 'react';
import logo from './images/backpain.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            What is a triggerpoint? 
            Commonly referred to as a "knot",
            triggerpoints are small contractions
            within the muscle fibers that cause
            tenderness and chronic discomfort.
            They usually appear in the neck,
            shoulders, and back due to occupational/physical
            stress on the body or mental/emotional
            stress. Releasing these points of muscular
            tension can lead to the elimination of padding
            and helps to maintain a healthy and
            comfortable lifestyle.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
