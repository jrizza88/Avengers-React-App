import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AvengersData from './AvengersData';

class App extends Component {
  constructor(){
    super();
    this.state = {
      avengers: AvengersData
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h1>Avengers: by Jamar</h1>
          </p>
          <div>
            {this.state.avengers.map( avenger => 
            <ul key={avenger.id}> Hero Name: {avenger.name} ||  Hero Age: {avenger.age} </ul>
              )}
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
    );
  }
}

export default App;
